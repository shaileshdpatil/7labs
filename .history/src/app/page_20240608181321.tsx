'use client';

import React, { useState } from 'react';
import InvoiceData from './components/InvoiceData';
import InvoicePDF from './components/InvoicePDF';

export default function Home() {
  const [customerName, setCustomerName] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [products, setProducts] = useState([
    { name: '', quantity: 0, price: 0, taxRate: 0 },
  ]);

  const handleCustomerNameChange = (event) => {
    setCustomerName(event.target.value);
  };

  const handleInvoiceDateChange = (event) => {
    setInvoiceDate(event.target.value);
  };

  const handleProductChange = (index, field, value) => {
    const newProducts = [...products];
    newProducts[index][field] = value;
    setProducts(newProducts);
  };

  const handleAddProduct = () => {
    setProducts([...products, { name: '', quantity: 0, price: 0, taxRate: 0 }]);
  };

  const handleRemoveProduct = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
  };

  const customer = { name: customerName };
  const invoice = { date: invoiceDate, products };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customerName">
            Customer Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="customerName"
            type="text"
            value={customerName}
            onChange={handleCustomerNameChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="invoiceDate">
            Invoice Date:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="invoiceDate"
            type="date"
            value={invoiceDate}
            onChange={handleInvoiceDateChange}
          />
        </div>
        {products.map((product, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`productName-${index}`}>
              Product Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id={`productName-${index}`}
              type="text"
              value={product.name}
              onChange={(event) => handleProductChange(index, 'name', event.target.value)}
            />
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`quantity-${index}`}>
              Quantity:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id={`quantity-${index}`}
              type="number"
              value={product.quantity}
              onChange={(event) => handleProductChange(index, 'quantity', event.target.value)}
            />
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`price-${index}`}>
              Price:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id={`price-${index}`}
              type="number"
              value={product.price}
              onChange={(event) => handleProductChange(index, 'price', event.target.value)}
            />
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`taxRate-${index}`}>
              Tax Rate:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id={`taxRate-${index}`}
              type="number"
              value={product.taxRate}
              onChange={(event) => handleProductChange(index, 'taxRate', event.target.value)}
            />
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => handleRemoveProduct(index)}
            >
              Remove Product
            </button>
          </div>
        ))}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleAddProduct}
        >
          Add Product
        </button>
      </form>
      <InvoiceData customer={customer} invoice={invoice} />
      <InvoicePDF customer={customer} invoice={invoice} />
    </main>
  );
}
