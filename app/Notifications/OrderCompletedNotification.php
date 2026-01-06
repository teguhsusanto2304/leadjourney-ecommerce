<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class OrderCompletedNotification extends Notification
{
    use Queueable;

    /**
     * Get the notification's delivery channels.
     */
    public function via(object $notifiable): array
    {
        // Added 'database' so it shows up in your React Bell component
        return ['mail', 'database'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('Order Confirmation - LeadJourney')
            ->greeting('Hello ' . $notifiable->name . '!')
            ->line('Your order has been successfully placed and is being processed.')
            ->action('View Order Status', url('/dashboard'))
            ->line('Thank you for shopping with LeadJourney!');
    }

    /**
     * This data is saved in the 'data' column of your 'notifications' table.
     * Your React NotificationBell component reads this.
     */
    public function toArray(object $notifiable): array
    {
        return [
            'message' => 'Your order has been completed successfully!',
            'type' => 'order_success',
            'action_url' => '/dashboard',
        ];
    }
}