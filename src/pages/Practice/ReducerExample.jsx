import React, { useReducer } from "react";
import {
  INITIAL_STATE,
  postReducer,
} from "../../components/Reducer/PostReducer";
import { ACTION_TYPES } from "../../setup/actions/postActionType";
const ReducerExample = () => {
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);
  const handleFetch = async () => {
    try {
      dispatch({ type: ACTION_TYPES.FETCH_START });
      let data = await (
        await fetch(`https://jsonplaceholder.typicode.com/posts/1`)
      ).json();
      dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: ACTION_TYPES.FETCH_ERROR });
    }
  };
  return (
    <div>
      <div className="m-4 p-4">
        <button className="my-2 p-2" onClick={handleFetch}>
          {state.loading ? "Wait..." : "Fetch the post"}
        </button>

        <p className="my-2 p-2">{state.post?.title}</p>
        <span className="my-2 p-2 text-danger">
          {" "}
          {state.error && "something went wrong"}
        </span>
      </div>
      <hr className="my-3" />
      <div className="m-4 p-4">
        <form>
          <input className="my-2" type="text" placeholder="Title" />
          <input className="my-2" type="text" placeholder="Desc" />
          <input className="my-2" type="text" placeholder="Price" />
          <p>Category</p>
          <select className="my-2">
            <option value="sneakers">Sneakers</option>
            <option value="shirts">Shirts</option>
            <option value="bags">Bags</option>
          </select>
          <textarea
            className="my-2"
            placeholder="Seperate tags with commas"
          ></textarea>
          <button className="my-2">Add Tags</button>
          <div className="my-2">
            <button className="me-4 px-3">-</button>
            Quantity (0)
            <button className="ms-4 px-3">+</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReducerExample;
