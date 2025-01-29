export type HeaderItem = {
  key: number;
  icon: JSX.Element;
  title: string;
};

export type HeaderList = HeaderItem[];

export type UseActiveButtonReturn = {
  activeNavigation: number,
  onChangeActiveNavigation: (key: number) => void
}

