const ErrorPage = ({ error }) => {
  const { message } = error.err;
  let messageError = "It looks like this page doesn't exist";

  if (error) {
    messageError = message;
  }

  return (
    <div>
      <h2>{messageError}</h2>
    </div>
  );
};

export default ErrorPage;
