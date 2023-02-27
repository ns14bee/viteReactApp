import React, { useReducer, useRef } from "react";
import {
  INITIAL_STATE,
  postReducer,
} from "../../components/Reducer/PostReducer";
import {
  FORM_INITIAL_STATE,
  formReducer,
} from "../../components/Reducer/FormReducer";
import { FORM_ACTION_TYPE } from "../../setup/actions/formActionType";
import { ACTION_TYPES } from "../../setup/actions/postActionType";
const ReducerExample = () => {
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);
  const [formState, formDispatch] = useReducer(formReducer, FORM_INITIAL_STATE);
  const tagRef = useRef();
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
  const handleChange = (e) => {
    formDispatch({
      type: FORM_ACTION_TYPE.CHANGE_INPUT,
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleTags = () => {
    const tags = tagRef.current.value.split(",");
    console.log(tags);
    formDispatch({ type: FORM_ACTION_TYPE.ADD_TAG, payload: tags });
  };
  console.log(formState);
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
      <div className="m-4 p-4  d-flex justify-content-center">
        <form className="d-flex flex-column justify-content-center form-body">
          <input
            className="my-2"
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
          />
          <input
            className="my-2"
            type="text"
            placeholder="Desc"
            name="desc"
            onChange={handleChange}
          />
          <input
            className="my-2"
            type="text"
            placeholder="Price"
            name="price"
            onChange={handleChange}
          />
          <div>
            <p>Category</p>
            <select className="my-2" name="category" onChange={handleChange}>
              <option value="sneakers">Sneakers</option>
              <option value="shirts">Shirts</option>
              <option value="bags">Bags</option>
            </select>
          </div>
          <textarea
            className="my-2"
            placeholder="Seperate tags with commas"
            ref={tagRef}
          ></textarea>
          <button className="my-2" type="button" onClick={handleTags}>
            Add Tags
          </button>
          <div>
            <small>
              {formState.tags.map((tag, index) => (
                <button
                  key={index}
                  type="button"
                  className="m-2 p-2"
                  onClick={() =>
                    formDispatch({
                      type: FORM_ACTION_TYPE.REMOVE_TAG,
                      payload: tag,
                    })
                  }
                >
                  {tag}
                </button>
              ))}
            </small>
          </div>
          <div className="my-2 d-flex justify-content-center">
            <button
              type="button"
              className="me-4 px-2"
              onClick={() => formDispatch({ type: FORM_ACTION_TYPE.DECREASE })}
            >
              -
            </button>
            Quantity ({formState.quantity})
            <button
              type="button"
              className="ms-4 px-2"
              onClick={() => formDispatch({ type: FORM_ACTION_TYPE.INCREASE })}
            >
              +
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReducerExample;
