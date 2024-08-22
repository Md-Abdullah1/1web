export interface CommonTouchSpinProp {
  color: string;
  id?: number;
  value: number;
  outline?: boolean;
  faAngle?: boolean;
  onDecrement: () => void;
  onIncrement: () => void;
  btnClass?: string;
}

export interface CommonSwitchProp {
  defaultChecked?: boolean;
  color?: string;
  disabled?: boolean;
}

export interface CommonSwitchSpanProp {
  color: string;
  name?: string | null;
  defaultChecked?: boolean;
  className?: string;
  onClick?: any;
}

export interface CommonSwitchProp {
  defaultChecked?: boolean;
  color?: string;
  disabled?: boolean;
}

export interface CommonSwitchSpanProp {
  color: string;
  defaultChecked?: boolean;
}
