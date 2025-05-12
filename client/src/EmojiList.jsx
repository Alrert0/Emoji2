import { useEffect, useState } from 'react';

function EmojiList() {
  const [emojis, setEmojis] = useState([]);
  const [filteredEmojis, setFilteredEmojis] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('default');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/emojis')
      .then((res) => res.json())
      .then((data) => {
        setEmojis(data);
        setFilteredEmojis(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Ошибка загрузки эмодзи:', err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = [...emojis];

    if (search) {
      filtered = filtered.filter((e) =>
        e.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== 'all') {
      filtered = filtered.filter((e) => e.category === category);
    }

    if (sort === 'asc') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === 'desc') {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilteredEmojis(filtered);
  }, [search, category, sort, emojis]);

  const categories = [...new Set(emojis.map((e) => e.category))];

  if (loading) return <p>Загрузка...</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="Поиск по имени..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: '8px', fontSize: '14px' }}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">Все категории</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="default">Без сортировки</option>
          <option value="asc">По имени (А-Я)</option>
          <option value="desc">По имени (Я-А)</option>
        </select>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {filteredEmojis.map((emoji, i) => (
          <div
            key={i}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '10px',
              textAlign: 'center',
              width: '100px',
            }}
          >
            <div
              dangerouslySetInnerHTML={{ __html: emoji.htmlCode[0] }}
              style={{ fontSize: '24px' }}
            />
            <p style={{ fontSize: '12px' }}>{emoji.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmojiList;
