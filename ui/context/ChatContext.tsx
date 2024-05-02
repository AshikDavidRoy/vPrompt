import React, { createContext, useState, ReactNode, useEffect } from "react";

interface ChatContextType {
  isNewChat: boolean;
  setIsNewChat: (isNew: boolean) => void;
  chatId: string;
  setChatId: (id: string) => void;
  suggestions: string[];
  setSuggestions: (suggestions: string[]) => void;
}

export const ChatContext = createContext<ChatContextType>({
  isNewChat: true,
  setIsNewChat: () => {},
  chatId: "",
  setChatId: () => {},
  suggestions: [],
  setSuggestions: () => {},
});

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [isNewChat, setIsNewChat] = useState<boolean>(true);
  const [chatId, setChatId] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const setNewChat = (isNew: boolean) => {
    setIsNewChat(isNew);
  };

  return (
    <ChatContext.Provider
      value={{
        isNewChat,
        setIsNewChat,
        chatId,
        setChatId,
        suggestions,
        setSuggestions,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

interface Chat {
  id: string;
  prompt: string;
  response: any[];
}

interface ChatsContextType {
  chats: Chat[];
  setChats: (chats: Chat[]) => void;
}

export const ChatsContext = createContext<ChatsContextType>({
  chats: [],
  setChats: () => {},
});

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatsProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    console.log(chats);
  }, [chats]); // Watch for changes in the 'chats' state

  return (
    <ChatsContext.Provider value={{ chats, setChats }}>
      {children}
    </ChatsContext.Provider>
  );
};
