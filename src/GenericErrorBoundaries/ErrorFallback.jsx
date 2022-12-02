function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <h3>{error.message}</h3>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export { ErrorFallback };
