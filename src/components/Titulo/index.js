function Titulo({ text, tag }) {
  const Tag = tag || 'h3';
  
  return (
    <Tag> {text}</Tag>
  );
}

export default Titulo;