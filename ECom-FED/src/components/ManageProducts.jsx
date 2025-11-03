import { useEffect, useState } from "react";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  // Load products from localStorage on mount
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  // Save to localStorage whenever products change
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  // Default image URLs for known products
  const getDefaultImage = (productName) => {
    const name = productName.toLowerCase();
    if (name.includes("laptop"))
      return "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=60";
    if (name.includes("iphone"))
      return "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=60";
    if (name.includes("ipad"))
      return "https://images.unsplash.com/photo-1587837073080-448bc6a2329c?auto=format&fit=crop&w=800&q=60";
    if (name.includes("watch"))
      return "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=60"; // wristwatch
    return "https://picsum.photos/400/300"; // fallback
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price) {
      alert("Please fill all fields!");
      return;
    }

    const newItem = {
      id: Date.now(),
      name: newProduct.name,
      price: parseFloat(newProduct.price),
      image: newProduct.image || getDefaultImage(newProduct.name),
    };

    setProducts([...products, newItem]);
    setNewProduct({ name: "", price: "", image: "" });
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this product?")) {
      const updated = products.filter((p) => p.id !== id);
      setProducts(updated);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold mb-6">Manage Products</h2>

      {/* Add Product Form */}
      <form
        onSubmit={handleAddProduct}
        className="bg-white p-6 rounded-lg shadow-md w-96 mb-8"
      >
        <h3 className="text-xl font-semibold mb-4">Add New Product</h3>

        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="text"
          name="image"
          value={newProduct.image}
          onChange={handleChange}
          placeholder="Image URL (optional)"
          className="w-full border p-2 mb-3 rounded"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {products.length === 0 ? (
          <p className="text-gray-600 col-span-3 text-center">
            No products added yet.
          </p>
        ) : (
          products.map((p) => (
            <div
              key={p.id}
              className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-lg transition"
            >
              <img
                src={p.image || getDefaultImage(p.name)}
                alt={p.name}
                onError={(e) => (e.target.src = getDefaultImage(p.name))}
                className="w-full h-40 object-cover rounded mb-3 border"
              />
              <h3 className="font-bold text-lg">{p.name}</h3>
              <p className="text-gray-600 mb-2">₹{p.price}</p>
              <button
                onClick={() => handleDelete(p.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ManageProducts;
