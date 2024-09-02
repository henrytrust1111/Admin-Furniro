import React from 'react';
import { FiUploadCloud } from 'react-icons/fi';

const AddAttribute = () => {
  return (
    <div className="flex-grow bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">Add Attribute</h1>
          <nav className="text-gray-500">
            <ol className="list-reset flex">
              <li><a href="#" className="hover:text-blue-600">Dashboard</a></li>
              <li><span className="mx-2">/</span></li>
              <li><a href="#" className="hover:text-blue-600">Category</a></li>
              <li><span className="mx-2">/</span></li>
              <li><a href="#" className="hover:text-blue-600">New category</a></li>
            </ol>
          </nav>
        </div>
        <form className="space-y-8">
          <div className="flex flex-col">
            <label htmlFor="product-name" className="text-sm font-medium text-gray-700 mb-2">
              Product name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="product-name"
              className="block w-full p-4 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Category name"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-2">
              Upload images <span className="text-red-500">*</span>
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-blue-400 rounded-lg">
              <div className="space-y-1 text-center">
                <FiUploadCloud className="mx-auto h-12 w-12 text-blue-600" />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                  >
                    <span>click to browse</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">or drop your images here</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAttribute;
