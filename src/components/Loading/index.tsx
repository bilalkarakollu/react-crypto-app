import React from "react";

interface LoadingProps {
  loading: boolean;
  error: string;
  children: React.ReactNode;
}

const Loading = (props: LoadingProps) => {
  if (props.loading) {
    return <div>Loading...</div>;
  }

  if (props.error) {
    return <div>{props.error}</div>;
  }

  return <>{props.children}</>;
};

export default React.memo(Loading);
