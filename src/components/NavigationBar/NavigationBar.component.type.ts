export type HeaderItem = {
  key: number;
  icon: JSX.Element;
  title: string;
  navigation: string;
};

export type Props = {
  activeBar: number,
}

export type HeaderList = HeaderItem[];

export type UseActiveButtonReturn = {
  activeNavigation: number,
  onChangeActiveNavigation: (key: number) => void
}

