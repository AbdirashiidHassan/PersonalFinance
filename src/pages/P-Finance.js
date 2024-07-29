const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [editId, setEditId] = useState(null);

  // Load transactions from local storage when the component mounts
  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem('transactions'));
    if (storedTransactions) {
      setTransactions(storedTransactions);
    }
  }, []);

  // Save transactions to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (e) => {
    e.preventDefault();
    if (editId) {
      const updatedTransactions = transactions.map((t) =>
        t.id === editId ? { id: editId, description, amount } : t
      );
      setTransactions(updatedTransactions);
      setEditId(null);
    } else {
      setTransactions([...transactions, { id: Date.now(), description, amount }]);
    }
    setDescription('');
    setAmount('');
  };

  const handleEdit = (t) => {
    setEditId(t.id);
    setDescription(t.description);
    setAmount(t.amount);
  };

  const handleDelete = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };
