import { useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import { Toaster, toast } from 'sonner';

export default function Notification() {
    const { flash = {} } = usePage().props;

useEffect(() => {
  if (flash.message) {
    toast[flash.type || 'success'](flash.message);
  }
}, [flash]);

    return <Toaster position="top-right" richColors />;
}