import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const BASIC_INFO_LEFT = [
  { label: "社員番号", value: "M0001" },
  { label: "従業員番号", value: "10133548" },
  { label: "氏名", value: "松本 恒一" },
  { label: "氏名（かな）", value: "まつもと こういち" },
  { label: "氏名（ローマ字）", value: "Matumoto Kouiti" },
  { label: "役職", value: "課長" },
  { label: "入社日", value: "19760401" },
  { label: "年次（強い年次）", value: "76B" },
  { label: "性別", value: "男" },
  { label: "年齢", value: "63" },
  { label: "生年月日", value: "1940/11/11" },
];

const BASIC_INFO_RIGHT = [
  { label: "会社名", value: "株式会社サンプル" },
  { label: "所属本部", value: "管理本部" },
  { label: "所属部", value: "経理財務部" },
  { label: "所属グループ（課）", value: "財務課" },
  { label: "部長", value: "部長 名前" },
  { label: "課(室)長／GM", value: "GM 名前" },
  { label: "キャリアフィールド", value: "キャリアフィールド名" },
  { label: "本部役割区分", value: "役割区分" },
  { label: "メールアドレス", value: "koichi.matsumoto@example.co.jp" },
  { label: "等級", value: "等級B" },
  { label: "人事メモ記号", value: "☆" },
];

export default function BasicInfoPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-bold">基本情報</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Table>
          <TableBody>
            {BASIC_INFO_LEFT.map((item, i) => (
              <TableRow key={item.label} className="border-b border-gray-100">
                <TableCell className="w-[140px] text-sm font-medium text-gray-500 py-2.5">{item.label}</TableCell>
                <TableCell className="text-sm text-gray-900 py-2.5">{item.value}</TableCell>
                <TableCell className="w-[140px] text-sm font-medium text-gray-500 py-2.5">
                  {BASIC_INFO_RIGHT[i]?.label}
                </TableCell>
                <TableCell className="text-sm text-gray-900 py-2.5">
                  {BASIC_INFO_RIGHT[i]?.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex gap-4 pt-2">
          <Card className="flex-1 py-0">
            <CardContent className="pt-4 pb-5 text-center">
              <div className="text-xs font-bold text-gray-900 border-b border-gray-200 pb-2 mb-3">勤続年数</div>
              <div className="text-[10px] text-blue-500 font-medium">在籍期間</div>
              <div className="text-3xl font-black text-gray-900 mt-1">8年9ヶ月</div>
            </CardContent>
          </Card>
          <Card className="flex-1 py-0">
            <CardContent className="pt-4 pb-5 text-center">
              <div className="text-xs font-bold text-gray-900 border-b border-gray-200 pb-2 mb-3">総合評価</div>
              <div className="text-[10px] text-blue-500 font-medium">直近評価</div>
              <div className="text-5xl font-black text-gray-900 mt-1">S</div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
