function Options({ question }) {
  return (
    <div>
      {question.options.map((option) => (
        <button key={option}>{option}</button>
      ))}
    </div>
  );
}

export default Options;
