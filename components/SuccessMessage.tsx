import SuccessIcon from './SuccessIcon';

export default function SuccessMessage({ children }) {
  return (
    <p className="flex items-center text-sm font-bold text-green-700 dark:text-green-400">
      <SuccessIcon />
      {children}
    </p>
  );
}
