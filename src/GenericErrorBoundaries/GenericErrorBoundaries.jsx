import React from "react";

export class GenericErrorBoundaries extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false, error: null, errorInfo: null };
  }

  /*  static getDerivedStateFromError(error) {
    // Оновлюємо стан, щоб наступний рендер показав запасний UI.
    return { hasError: true, error: error, errorInfo: errorInfo };
  } */

  componentDidCatch(error, errorInfo) {
    // Ви також можете передати помилку в службу звітування про помилки
    console.log(error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    //logErrorToMyService(error, errorInfo);
  }

  render() {
    const { error, errorInfo, hasError } = this.state;
    /* if (this.state.hasError) {
      return <h3>{this.state.error.message}</h3>;
    } */
    if (errorInfo) {
      // Error path

      return <ErrorView {...{ error, errorInfo }} />;
    }

    return this.props.children;
  }
}

export const ErrorView = ({ error, errorInfo }) => (
  <div>
    <h2>Something went wrong.</h2>
    <details>
      {error && error.toString()}
      <br />
      {errorInfo.componentStack}
    </details>
  </div>
);
