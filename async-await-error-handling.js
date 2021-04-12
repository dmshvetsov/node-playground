const { getPromise } = require('./utils/promises');

function catchImmediateReturnExperiment () {
  try {
    // note implicit async return, since getPromise return a Promise
    return getPromise({ reject: true })
  } catch (err) {
    console.error('[catchImmediateReturnExperiment] Caution! You will never see this log:', err);
  }
}

async function properCatchExperiment () {
  try {
    const result = await getPromise({ reject: true })
    return result;
  } catch (err) {
    console.error('[properCatchExperiment] Yes! catch them all:', err);
  }
}

async function catchReturnAwaitExperiment () {
  try {
    // of course you can await before return and it will catch the error
    // but `return await` considered a bad practice
    return await getPromise({ reject: true })
  } catch (err) {
    console.error('[catchReturnAwaitExperiment] This will catch, but not recommended:', err);
  }
}

catchImmediateReturnExperiment()
  .catch((err) => console.error('[catchReturnAwaitExperiment] Sorry I need to catch it, since try/catch doesnt work on arround return statements:', err));

properCatchExperiment()
  .catch((err) => console.error('[properCatchExperiment] Just work, you will never see this error message:', err));

catchReturnAwaitExperiment()
  .catch((err) => console.error('[catchReturnAwaitExperiment] You will never see this error message:', err));
