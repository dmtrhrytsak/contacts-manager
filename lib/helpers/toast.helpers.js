export const getToastErrorOptions = (errorMessage) => ({
  description: errorMessage,
  status: 'error',
  position: 'bottom-right',
  isClosable: true,
});

export const getToastSuccessOptions = (successMessage) => ({
  description: successMessage,
  status: 'success',
  variant: 'left-accent',
  position: 'bottom-right',
});
