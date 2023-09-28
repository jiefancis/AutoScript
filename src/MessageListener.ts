class MessageListener {
  listeners: Record<string, any> = {};
  contructor() {
    this.listeners = {};
  }

  on(name: string, listener: (message: any, sender: any) => void) {
    if (!this.listeners[name]) {
      this.listeners[name] = listener;
    }
    return this;
  }

  listener() {
    return this.listen.bind(this);
  }

  listen(message: any, sender: any) {
    const listener = this.listeners[message.event];
    listener && listener.call({ message, sender }, message, sender);
  }
}
const messageListener = new MessageListener();
export default messageListener;
