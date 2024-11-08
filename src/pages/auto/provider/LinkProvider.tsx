import { createContext, useContext, useState, ReactNode } from 'react';

export type LinkState = {
  title: string;
  user: string;
  url: string;
};

type LinkContextType = {
  linkState: LinkState;
  setLinkState: (state: LinkState) => void;
};

const LinkContext = createContext<LinkContextType | undefined>(undefined);

export const useLinkContext = () => {
  const context = useContext(LinkContext);
  if (!context) {
    throw new Error('useLinkContext must be used within a LinkProvider');
  }
  return context;
};

export const LinkProvider = ({ children }: { children: ReactNode }) => {
  const [linkState, setLinkState] = useState<LinkState>({
    title: '',
    user: '',
    url: '',
  });

  return (
    <LinkContext.Provider value={{ linkState, setLinkState }}>
      {children}
    </LinkContext.Provider>
  );
};
