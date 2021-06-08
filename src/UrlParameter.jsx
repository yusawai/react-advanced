import { useLocation, useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  // URLの末尾から数えて1つ目の?以降の文字列（Key&Value）を取得
  const { search } = useLocation();
  // 取得したパラメータに対するファンクション群を設定
  const query = new URLSearchParams(search);

  return (
    <div>
      <h1>This's UrlParameter.</h1>
      <p>The value of key "name" is {query.get("name")}.</p>
      <p>The value of key "sex" is {query.get("sex")}.</p>
    </div>
  );
};
