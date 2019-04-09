export default getStoredData => store => next => action => {
  const oldData = getStoredData(store.getState());
  const result = next(action);
  const data = getStoredData(store.getState());
  if (data !== oldData) {
    nexusWallet.sendMessage('update-storage', data);
  }
  return result;
};
