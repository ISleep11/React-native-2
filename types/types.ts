import { StyleProp, ViewStyle, TextStyle, View } from "react-native";
import { store } from "../store/mainStore";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
type Todo = {
  id: string;
  title: string;
};
export type TodoState = {
  todos: Todo[];
  status: "loading" | "success" | "fail";
  error?: string;
};

export interface IButton {
  buttonText: string;
  buttonStyle: StyleProp<ViewStyle>;
  buttonTextStyle: StyleProp<TextStyle>;
  onClick: () => void;
  ref?: React.Ref<View>;
}

export interface ICopilotStepTextProps {
  text: string;
  tutorialText: string;
  order: number;
  name: string;
}

export interface IItemFromListProps {
  item: string;
}

export interface ISectionHeaderProps {
  title: string;
}

export interface IAction {
  type: string;
  payload?: unknown;
}

export interface IFetchSliceInitialState {
  data: unknown;
}
