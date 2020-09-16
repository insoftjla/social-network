import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import profileReducer, {setNewPost} from "./redux/profileReducer";

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

let state = {
  postData: [
    {id: 1, text: 'My first post', like: 20},
    {id: 2, text: 'My second post', like: 30}
  ],
  userProfile: null
}

it ("new post", () => {
  let action = setNewPost("insoft");

  let newState = profileReducer(state, action);

  expect(newState.postData.length).toBe(3);

})
