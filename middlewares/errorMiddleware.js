//error middleware || NEXT Function

const errorMiddelware = (err, req, res, next) => {
  console.log(err);
  const defaultErrors = {
    statusCode: 500,
    message: err,
  };

  //missing filled error
  if (err.name === "validationError") {
    defaultErrors.statusCode = 400;
    defaultErrors.message = Object.values(err.erros)
      .map((item) => item.message)
      .join(",");
  }
  res.status(defaultErrors.statusCode).send({
    message: defaultErrors.message,
  });
};
export default errorMiddelware;
