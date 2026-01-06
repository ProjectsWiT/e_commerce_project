<div className="mt-6 flex gap-6 justify-center flex-wrap">
  {products.map((product) => (
    <div
      key={product.id}
      className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-1/2 lg:w-1/3"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">
          NEW
        </span>

        <p className="text-xs text-gray-500 mt-1">
          {product.category}
        </p>

        <h3 className="text-lg font-bold mt-1">
          {product.title}
        </h3>

        <p className="text-sm text-gray-600 mt-1">
          {product.description}
        </p>

        <div className="flex items-center justify-between text-gray-500 text-xs mt-2">
          <span className="flex items-center gap-1">
            <AlarmCheck className="w-4 h-4 text-sky-500" />
            {product.date}
          </span>

          <span className="flex items-center gap-1">
            <ChartArea className="w-4 h-4 text-[#23856D]" />
            {product.comments} comments
          </span>
        </div>

        <button className="mt-4 text-blue-600 font-semibold hover:underline">
          Learn More →
        </button>
      </div>
    </div>
  ))}
</div>
