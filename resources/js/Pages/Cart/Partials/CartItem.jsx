import { React} from 'react';
import { useForm,router } from '@inertiajs/react';
import { Trash2, Plus, Minus } from 'lucide-react';


export default function CartItem({ item }) {
  const { patch, delete: destroy, processing } = useForm();
      
  const updateQty = (amount) => {
  const newQty = item.quantity + amount;
  if (newQty < 1 || processing) return;

  router.patch(
    route('cart.update', item.id),   // ✅ route() generates URL
    { quantity: newQty },            // ✅ request body
    { preserveScroll: true }
  );
};



  const formatCurrency = (value) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

  return (
    <div
      className="flex items-center gap-4 sm:gap-6 bg-gray-900 rounded-2xl p-4 sm:p-5 
                 border border-gray-800 transition-all hover:border-indigo-500/30 group"
    >
      {/* PRODUCT SECTION */}
      <div className="flex-1 flex items-center gap-4 min-w-0">
        <div className="shrink-0">
          <div className="size-12 sm:size-16 overflow-hidden rounded-xl border border-gray-800 bg-gray-950 flex items-center justify-center p-1">
            <img
              src={item.product.image}
              className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
              alt={item.product.name}
            />
          </div>
        </div>

        <div className="flex flex-col min-w-0">
          <h3 className="text-white text-sm sm:text-base font-bold truncate">
            {item.product.name}
          </h3>
          <p className="text-gray-400 text-[11px] font-medium truncate">
            {item.product.category || 'Subscription'} • SKU: {item.product.sku || 'N/A'}
          </p>
          <button
            onClick={() => destroy(route('cart.destroy', item.id))}
            disabled={processing}
            aria-label={`Remove ${item.product.name}`}
            className="mt-2 flex items-center gap-1.5 text-gray-500 hover:text-red-400 
                       text-[10px] font-bold uppercase tracking-wider transition-colors"
          >
            <Trash2 size={12} /> Remove
          </button>
        </div>
      </div>

      {/* QUANTITY SECTION */}
      <div className="flex flex-col items-center gap-1">
        <div className="flex items-center bg-gray-950 rounded-xl p-1 border border-gray-800">
          <button
            disabled={processing || item.quantity <= 1}
            onClick={() => updateQty(-1)}
            aria-label="Decrease quantity"
            className="size-8 flex items-center justify-center text-gray-400 hover:text-white 
                       disabled:opacity-10 transition-colors"
          >
            <Minus size={14} />
          </button>
          <span
            className={`text-white text-sm font-black w-8 text-center tabular-nums transition-transform ${
              processing ? 'scale-95 opacity-70' : 'scale-100 opacity-100'
            }`}
          >
            {item.quantity}
          </span>
          <button
            disabled={processing}
            onClick={() => updateQty(1)}
            aria-label="Increase quantity"
            className="size-8 flex items-center justify-center text-gray-400 hover:text-white 
                       disabled:opacity-10 transition-colors"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>

      {/* TOTAL SECTION */}
      <div className="w-24 sm:w-32 text-right">
        <p className="text-white text-base sm:text-lg font-black tracking-tight">
          {formatCurrency(item.product.price * item.quantity)}
        </p>
        <p className="text-gray-500 text-[10px] font-bold uppercase">
          {formatCurrency(item.product.price)} / unit
        </p>
      </div>
    </div>
  );
}