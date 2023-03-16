import React,{useState} from 'react'

function Stories() {
     

        // React ^16.3
        // this.storiesElement = React.createRef();

        const storiesElement = null;
        let  storiesApi = null;

       
        const [storiesState,setStoriesState]=useState("")

        const storiesStateFixed = {
            stories: [
              {
                id: 'ramon',
                photo:
                  'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/users/1.jpg',
                name: 'Ramon',
                time: timestamp(),
                items: [
                  {
                    id: 'ramon-1',
                    type: 'photo',
                    length: 3,
                    src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/1.jpg',
                    preview:
                      'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/1.jpg',
                    link: '',
                    linkText: false,
                    time: timestamp()
                  },
                  {
                    id: 'ramon-2',
                    type: 'video',
                    length: 0,
                    src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/2.mp4',
                    preview:
                      'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/2.jpg',
                    link: '',
                    linkText: false,
                    time: timestamp()
                  },
                  {
                    id: 'ramon-3',
                    type: 'photo',
                    length: 3,
                    src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/3.png',
                    preview:
                      'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/3.png',
                    link: 'https://ramon.codes',
                    linkText: 'Visit my Portfolio',
                    time: timestamp()
                  }
                ]
              },
              {
                id: 'gorillaz',
                photo:
                  'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/users/2.jpg',
                name: 'Gorillaz',
                time: timestamp(),
                items: [
                  {
                    id: 'gorillaz-1',
                    type: 'video',
                    length: 0,
                    src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/4.mp4',
                    preview:
                      'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/4.jpg',
                    link: '',
                    linkText: false,
                    time: timestamp()
                  },
                  {
                    id: 'gorillaz-2',
                    type: 'photo',
                    length: 3,
                    src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/5.jpg',
                    preview:
                      'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/5.jpg',
                    link: '',
                    linkText: false,
                    time: timestamp()
                  }
                ]
              },
              {
                id: 'ladygaga',
                photo:
                  'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/users/3.jpg',
                name: 'Lady Gaga',
                time: timestamp(),
                items: [
                  {
                    id: 'ladygaga-1',
                    type: 'photo',
                    length: 5,
                    src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/6.jpg',
                    preview:
                      'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/6.jpg',
                    link: '',
                    linkText: false,
                    time: timestamp()
                  },
                  {
                    id: 'ladygaga-2',
                    type: 'photo',
                    length: 3,
                    src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/7.jpg',
                    preview:
                      'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/7.jpg',
                    link: 'http://ladygaga.com',
                    linkText: false,
                    time: timestamp()
                  }
                ]
              },
              {
                id: 'starboy',
                photo:
                  'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/users/4.jpg',
                name: 'The Weeknd',
                time: timestamp(),
                items: [
                  {
                    id: 'starboy-1',
                    type: 'photo',
                    length: 5,
                    src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/8.jpg',
                    preview:
                      'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/8.jpg',
                    link: '',
                    linkText: false,
                    time: timestamp()
                  }
                ]
              },
              {
                id: 'riversquomo',
                photo:
                  'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/users/5.jpg',
                name: 'Rivers Cuomo',
                time: timestamp(),
                items: [
                  {
                    id: 'riverscuomo-1',
                    type: 'photo',
                    length: 10,
                    src: 'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/9.jpg',
                    preview:
                      'https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/9.jpg',
                    link: '',
                    linkText: false,
                    time: timestamp()
                  }
                ]
              }
            ]
          };

        let currentSkin = getCurrentSkin(); // from demo

          storiesApi = Zuck(storiesElement, {
          backNative: true,
          previousTap: true,
          skin: currentSkin['name'],
          autoFullScreen: currentSkin['params']['autoFullScreen'],
          avatars: currentSkin['params']['avatars'],
          paginationArrows: currentSkin['params']['paginationArrows'],
          list: currentSkin['params']['list'],
          cubeEffect: currentSkin['params']['cubeEffect'],
          localStorage: true,
          stories: storiesState.stories,
          reactive: true,
          callbacks: {
            onDataUpdate: function (currentState, callback) {
              setStoriesState(
                (state) => {
                  state.stories = [...currentState];

                  return state;
                },
                () => {
                  callback();
                }
              );
            }.bind(this)
          }
        });
      }

      render() {
        const timelineItems = [];

        this.state.stories.forEach((story, storyId) => {
          const storyItems = [];

          story.items.forEach((storyItem) => {
            storyItems.push(
              <li
                key={storyItem.id}
                data-id={storyItem.id}
                data-time={storyItem.time}
                className={storyItem.seen ? 'seen' : ''}
              >
                <a
                  href={storyItem.src}
                  data-type={storyItem.type}
                  data-length={storyItem.length}
                  data-link={storyItem.link}
                  data-linkText={storyItem.linkText}
                >
                  <img src={storyItem.preview} />
                </a>
              </li>
            );
          });

          let arrayFunc = story.seen ? 'push' : 'unshift';
          timelineItems[arrayFunc](
            <div
              className={story.seen ? 'story seen' : 'story'}
              key={story.id}
              data-id={story.id}
              data-last-updated={story.lastUpdated}
              data-photo={story.photo}
            >
              <a className="item-link" href={story.link}>
                <span className="item-preview">
                  <img src={story.photo} />
                </span>
                <span
                  className="info"
                  itemProp="author"
                  itemScope=""
                  itemType="http://schema.org/Person"
                >
                  <strong className="name" itemProp="name">
                    {story.name}
                  </strong>
                  <span className="time">
                    {(new Date(story.lastUpdated * 1000).toLocaleString())}
                  </span>
                </span>
              </a>

              <ul className="items">{storyItems}</ul>
            </div>
          );
        });

        return (
          <div>
            <div
              ref={(node) => (this.storiesElement = node)}
              id="stories-react"
              className="storiesWrapper"
            >
              {timelineItems}
            </div>
          </div>
        );
      }
    }
  
}

export default Stories