<div className="bg-gray-200 min-h-screen">
<h1 className="text-4xl font-bold text-center pt-12 text-teal-600">Personal Finance Tracker</h1>
<div className="container mt-20 mx-auto px-5">
  <div className="p-5 bg-white rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold text-center mb-5 text-teal-600">Transactions</h2>
    <table className="w-full table-fixed text-left">
      <thead>
        <tr className="flex w-full justify-between bg-teal-600 text-white">
          <th className="text-lg font-bold w-full md:w-1/4 px-2 py-2">Description</th>
          <th className="text-lg font-bold w-full md:w-1/4 px-2 py-2">Amount</th>
          <th className="text-lg font-bold w-full md:w-1/4 px-2 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((t) => (
          <tr key={t.id} className="flex w-full justify-between border-b border-gray-200">
            <td className="py-2 px-2 w-full md:w-1/4">{t.description}</td>
            <td className="py-2 px-2 w-full md:w-1/4">{t.amount}</td>
            <td className="py-2 px-2 w-full md:w-1/4 flex space-x-2">
              <button
                className="bg-yellow-500 px-4 py-2 text-white rounded hover:bg-yellow-600"
                onClick={() => handleEdit(t)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 px-4 py-2 text-white rounded hover:bg-red-600"
                onClick={() => handleDelete(t.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="mt-16 mb-4 w-full lg:w-1/2 xl:w-1/3 p-5 mx-auto rounded-lg shadow-lg border border-gray-100 bg-teal-50">
      <h1 className="text-xl font-bold text-center mb-5 text-teal-600">{editId ? 'Edit Transaction' : 'Add Your Transactions'}</h1>
      <form onSubmit={addTransaction} className="flex flex-col space-y-4">
        <input
          type="text"
          className="border border-slate-300 rounded-md w-full px-2 py-2"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <input
          type="number"
          className="border border-slate-300 rounded-md w-full px-2 py-2"
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <button
          className="bg-teal-500 hover:bg-teal-600 focus:ring-teal-300 px-4 py-2 text-white rounded-md"
          type="submit"
        >
          {editId ? 'Edit Transaction' : 'Add Transaction'}
        </button>
      </form>
    </div>
  </div>
</div>
</div>