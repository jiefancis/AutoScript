import { FC, memo, useEffect, useMemo, useRef, useState } from 'react';
import './index.less';
import { useBoolean, useMemoizedFn } from 'ahooks';
import Draggable from 'react-draggable';
enum ChatTypeEnum {
  ROBOT = 'robot',
  ME = 'me',
}
interface ChatRecord {
  type: ChatTypeEnum;
  content: string;
  response?: string;
}
const defaultAskList = [
  {
    content: '✏️ Auto Snipe Tip',
    response: 'What do you want to modify the snipe? Current Value: 0.01 ETH',
  },
  {
    content: '✏️ Sell GWEI',
  },
  {
    content: '✏️ Auto Snipe Tip',
  },
];
const CustomerService: FC = memo(() => {
  const [isAsk, askActions] = useBoolean(false);
  const [draggable, dragActions] = useBoolean(false);
  const [content, setContent] = useState('');
  const chatRef = useRef<HTMLDivElement>(null);
  const [messageList, setMessageList] = useState<Array<ChatRecord>>([
    // {
    //   type: ChatTypeEnum.ME,
    //   content: 'Hi👋 Who are you',
    // },
    // {
    //   type: ChatTypeEnum.ROBOT,
    //   content: ` Hi👋 Who are youHi👋 Who are youHi👋 Who are youHi👋 Who are youHi👋 Who are
    //   youHi👋 Who are youHi👋 Who are youHi👋 Who are youHi👋 Who are you`,
    // },
    // {
    //   type: ChatTypeEnum.ME,
    //   content: 'Hi👋 Who are you',
    // },
    // {
    //   type: ChatTypeEnum.ROBOT,
    //   content: ` Hi👋 Who are youHi👋 Who are youHi👋 Who are youHi👋 Who are youHi👋 Who are
    //   youHi👋 Who are youHi👋 Who are youHi👋 Who are youHi👋 Who are you`,
    // },
    // {
    //   type: ChatTypeEnum.ME,
    //   content: 'Hi👋 Who are you',
    // },
    // {
    //   type: ChatTypeEnum.ROBOT,
    //   content: ` Hi👋 Who are youHi👋 Who are youHi👋 Who are youHi👋 Who are youHi👋 Who are
    //   youHi👋 Who are youHi👋 Who are youHi👋 Who are youHi👋 Who are you`,
    // },
    // {
    //   type: ChatTypeEnum.ME,
    //   content: 'Hi👋 Who are you',
    // },
    // {
    //   type: ChatTypeEnum.ROBOT,
    //   content: ` Hi👋 Who are youHi👋 Who are youHi👋 Who are youHi👋 Who are youHi👋 Who are
    //   youHi👋 Who are youHi👋 Who are youHi👋 Who are youHi👋 Who are you`,
    // },
    // {
    //   type: ChatTypeEnum.ME,
    //   content: 'Hi👋 Who are you',
    // },
    // {
    //   type: ChatTypeEnum.ROBOT,
    //   content: ` Hi👋 Who are youHi👋 Who are youHi👋 Who are youHi👋 Who are youHi👋 Who are
    //   youHi👋 Who are youHi👋 Who are youHi👋 Who are youHi👋 Who are you`,
    // },
  ]);

  const askHandle = useMemoizedFn(() => {
    if (!draggable) {
      askActions.toggle();
    }
  });

  const sendHandle = useMemoizedFn(() => {
    const tmpContent = content;
    setMessageList([
      ...messageList,
      {
        type: ChatTypeEnum.ME,
        content: tmpContent,
      },
    ]);
    // clear
    setContent('');
  });

  useEffect(() => {
    // scroll
    if (chatRef?.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messageList]);

  const inputHandle = useMemoizedFn((e: any) => setContent(e.target.value));

  const defaultAskHandle = useMemoizedFn((content) => {
    return () => {
      const asks = defaultAskList.filter((item) => item.content === content);
      setMessageList([
        ...messageList,
        {
          type: ChatTypeEnum.ME,
          content: content,
        },
      ]);

      // mock
      if (asks.length > 0) {
        if (asks[0]?.response) {
          setTimeout(() => {
            setMessageList([
              ...messageList,
              {
                type: ChatTypeEnum.ME,
                content: content,
              },
              {
                type: ChatTypeEnum.ROBOT,
                content: asks[0]?.response as string,
              },
            ]);
          }, 1000);
        }
      }
    };
  });

  const onStop = useMemoizedFn(() => {
    dragActions.setFalse();
  });

  const onStart = useMemoizedFn(() => {
    dragActions.setTrue();
  });

  const chatJsx = useMemo(() => {
    return (
      <>
        <div className="auto-ape-customer-service-content-chat-main-ask-box">
          <img
            className="auto-ape-customer-service-content-chat-main-ask-box--icon"
            src="/images/robot-avatar.png"
            alt=""
          />
          <div className="auto-ape-customer-service-content-chat-main-ask-box-right">
            <div className="auto-ape-customer-service-content-chat-main-ask-box-right-text">
              Hey Chloe, what do you want to trade today😊?
            </div>
            {defaultAskList.map((item, index) => {
              return (
                <div
                  key={index}
                  className="auto-ape-customer-service-content-chat-main-ask"
                  onClick={defaultAskHandle(item.content)}
                >
                  {item.content}
                </div>
              );
            })}
          </div>
        </div>
        {messageList.map((item, index) => {
          if (item.type === ChatTypeEnum.ME) {
            return (
              <div key={index} className="auto-ape-customer-service-content-chat-main-item">
                <img
                  className="auto-ape-customer-service-content-chat-main-item--icon"
                  src="/icon/me.svg"
                  alt=""
                />
                <span>{item.content}</span>
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className="auto-ape-customer-service-content-chat-main-item auto-ape-customer-service-content-chat-main-item-robot"
              >
                <img
                  className="auto-ape-customer-service-content-chat-main-item--icon"
                  src="/images/robot-avatar.png"
                  alt=""
                />
                {/* <div className="auto-ape-customer-service-content-chat-main-item-left"></div> */}
                <span>{item.content}</span>
              </div>
            );
          }
        })}
      </>
    );
  }, [defaultAskHandle, messageList]);
  return (
    <Draggable axis="y" bounds={{ top: -120, bottom: 0 }} onStart={onStart} onStop={onStop}>
      <div
        className="auto-ape-customer-service"
        // draggable
        // style={{ bottom: `${top.current}px` }}
        // onDragStart={mouseDownHandle}
        // onDrag={mouseMoveHandle}
        // onDragEnd={mouseUpHandle}
      >
        {isAsk && (
          <div className="auto-ape-customer-service-content">
            <div className="auto-ape-customer-service-content-icon" onClick={askHandle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="12"
                viewBox="0 0 20 12"
                fill="none"
              >
                <path
                  d="M2 10L9.29289 2.70711C9.68342 2.31658 10.3166 2.31658 10.7071 2.70711L18 10"
                  stroke="#2F2F2F"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="auto-ape-customer-service-content-chat">
              <div className="auto-ape-customer-service-content-chat-main" ref={chatRef}>
                {chatJsx}
              </div>
              <div className="auto-ape-customer-service-content-chat-bottom">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9.87295 4.58355C10.0974 3.66604 11.402 3.66604 11.6265 4.58354L12.1686 6.79889C12.5952 8.54274 13.9568 9.9043 15.7006 10.331L17.916 10.873C18.8335 11.0975 18.8335 12.4021 17.916 12.6266L15.7006 13.1686C13.9568 13.5953 12.5952 14.9569 12.1686 16.7007L11.6265 18.916C11.402 19.8336 10.0974 19.8336 9.87295 18.916L9.33092 16.7007C8.90425 14.9569 7.54269 13.5953 5.79885 13.1686L3.5835 12.6266C2.66601 12.4021 2.666 11.0975 3.5835 10.873L5.79885 10.331C7.54269 9.9043 8.90425 8.54274 9.33092 6.7989L9.87295 4.58355Z"
                    fill="#FFA34F"
                  />
                  <path
                    d="M18.9644 1.8583C19.0557 1.58375 19.4441 1.58375 19.5354 1.85831L19.9302 3.0453C20.1697 3.76522 20.7346 4.3301 21.4545 4.56958L22.6415 4.96442C22.916 5.05574 22.916 5.4441 22.6415 5.53542L21.4545 5.93026C20.7346 6.16974 20.1697 6.73462 19.9302 7.45454L19.5354 8.64153C19.4441 8.91609 19.0557 8.91609 18.9644 8.64153L18.5696 7.45454C18.3301 6.73462 17.7652 6.16974 17.0453 5.93026L15.8583 5.53542C15.5837 5.44409 15.5837 5.05574 15.8583 4.96442L17.0453 4.56958C17.7652 4.3301 18.3301 3.76522 18.5696 3.0453L18.9644 1.8583Z"
                    fill="#FFA34F"
                  />
                </svg>
                <input
                  value={content}
                  onInput={inputHandle}
                  type="text"
                  placeholder="Any help with your task?"
                />
                <svg
                  className="auto-ape-customer-service-content-chat-bottom-send"
                  onClick={sendHandle}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_462_12575)">
                    <rect width="24" height="24" fill="white" />
                    <path
                      d="M5.12213 6.2632C4.62406 5.18883 5.65055 4.13878 6.75135 4.59658L20.9417 10.498C21.9587 10.9209 22.1289 12.2787 21.2319 12.8129L8.71547 20.2664C7.74452 20.8446 6.47155 19.9282 6.69503 18.8119L7.90424 13.3137L15.5502 11.9772L7.59245 11.4972L5.12213 6.2632Z"
                      fill="#FF881B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_462_12575">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        )}
        {!isAsk && (
          <div className="auto-ape-customer-service-ask" onClick={askHandle}>
            <img src="/images/robot.png" alt="" />
            <span>Ask me</span>
          </div>
        )}
      </div>
    </Draggable>
  );
});
CustomerService.defaultProps = {};
export default CustomerService;
