type TableProps = {
  data: any[];
};

export default function Table({ data }: TableProps) {
  if (!data || data.length === 0) return <p>No hay datos disponibles</p>;

  const headers = Object.keys(data[0]);

  return (
    <table border={1} cellPadding={5}>
      <thead>
        <tr>
          {headers.map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {headers.map((key) => (
              <td key={key}>{row[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
