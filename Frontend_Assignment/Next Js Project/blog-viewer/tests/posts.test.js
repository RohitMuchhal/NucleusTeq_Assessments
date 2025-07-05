import { getStaticProps } from '../pages/posts';
import { act } from '@testing-library/react';

describe('getStaticProps', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('returns posts as props', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            { id: '1', title: 'Mock Post 1' },
            { id: '2', title: 'Mock Post 2' }
          ]),
      })
    );

    let result;
    await act(async () => {
      result = await getStaticProps();
    });

    expect(result).toEqual({
      props: {
        posts: [
          { id: '1', title: 'Mock Post 1' },
          { id: '2', title: 'Mock Post 2' }
        ],
      },
    });
  });

  it('returns empty posts on fetch failure', async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error('Fetch failed')));

    let result;
    await act(async () => {
      result = await getStaticProps();
    });

    expect(result).toEqual({
      props: {
        posts: [],
      },
    });
  });
});
