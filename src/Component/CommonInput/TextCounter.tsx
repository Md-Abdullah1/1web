function TextCounter(props: any) {
  const { length, totalLength } = props;

  return <span className="m-t text-muted small">{length || 0}/{totalLength}</span>;
}

export default TextCounter;
