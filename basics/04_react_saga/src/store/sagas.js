/**
 * redux-saga与redux-chunk的区别：
 *  1、虽然他们都是在做异步处理，但是redux-saga更加遵循redux本身的原则，派发出来的动作是比较纯粹的action，不会是一个函数
 *  2、redux-saga对异步处理的控制非常的强，因为它基于generator，可以解决更加复杂的异步操作
 */

/**
 * 使用redux-saga
 */

/** 
 * call调用异步函数
 * 当异步函数执行后得到结果了，用put去通知状态更新
 * takeEvery负责的全局监听action，当监听到某个action来的时候，takeEvery要截住它，并且让它去执行call和put
 */
import { call, put, takeEvery } from "redux-saga/effects";

// 模拟登录
const UserService = {
  login(uname) {// login函数，参数是uname
    return new Promise((resolve, reject) => {// 返回一个Promise对象
      setTimeout(() => {
        if (uname === "Jerry") {
          resolve({ id: 1, name: "Jerry", age: 20 });// 登录成功
        } else {
          reject("用户名或密码错误");// 登录失败
        }
      }, 1000);
    });
  }
};

// worker Saga
function* login(action) {
  try {
    yield put({ type: "requestLogin" });// put一个对象，内容是一个action，action的类型是requestLogin，请求登录，处于loading中
    const result = yield call(UserService.login, action.uname);// 使用call调用UserService.login方法，并且传递参数action.uname，异步函数UserService.login执行完成后，会将结果返回给result
    yield put({ type: "loginSuccess", result });// put一个对象，内容是一个action，action的类型是loginSuccess，参数是result（上一步异步操作的结果），如果登录成功，result中的结果是resolve中的对象
  } catch (message) {// 登录失败的时候，message会得到reject中的结果
    yield put({ type: "loginFailure", message });
  }
}
// 全局监听器
// 作为redux的中间件，提前拦截到login action，不要让它往真正的reducer走，而是走我们自己定义的逻辑，这时候就会执行上面的login函数
// 按步执行login中的yield
// 
function* mySaga() {
  yield takeEvery("login", login);// takeEvery做的事情是：当所有事情都做完以后，让action继续往下走
}

export default mySaga;
