function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="error">
      <p>Something went wrong:</p>
      <h3>{error.message}</h3>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export { ErrorFallback };
