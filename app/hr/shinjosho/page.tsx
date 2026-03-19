import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

function DataRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex py-2 border-b border-gray-50">
      <span className="w-[180px] flex-shrink-0 text-sm font-medium text-gray-500">{label}</span>
      <span className="text-sm text-gray-900">{value}</span>
    </div>
  );
}

function TwoColRow({ left, right }: { left: { label: string; value: string }; right?: { label: string; value: string } }) {
  return (
    <div className="flex py-2 border-b border-gray-50">
      <span className="w-[130px] flex-shrink-0 text-sm font-medium text-gray-500">{left.label}</span>
      <span className="w-[200px] flex-shrink-0 text-sm text-gray-900">{left.value}</span>
      {right && (
        <>
          <span className="w-[130px] flex-shrink-0 text-sm font-medium text-gray-500">{right.label}</span>
          <span className="text-sm text-gray-900">{right.value}</span>
        </>
      )}
    </div>
  );
}

export default function ShinjoshoPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-base font-bold">身上書</CardTitle>
          <Badge variant="outline" className="text-xs">顧問更新日</Badge>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M10 1.5L12.5 4 4.5 12H2V9.5L10 1.5z" stroke="currentColor" strokeWidth="1.2" /></svg>
            編集
          </div>

          <TwoColRow left={{ label: "社員番号", value: "M0001" }} right={{ label: "性別", value: "男" }} />
          <TwoColRow left={{ label: "従業員番号", value: "10133548" }} right={{ label: "年齢", value: "85" }} />
          <DataRow label="氏名" value="松本 恒一" />
          <DataRow label="氏名（かな）" value="まつもと こういち" />
          <DataRow label="氏名（ローマ字）" value="Matumoto Kouiti" />
          <DataRow label="メールアドレス" value="koichi.matsumoto@example.co.jp" />
          <TwoColRow left={{ label: "入社日", value: "19760401" }} right={{ label: "年次", value: "76B" }} />
          <TwoColRow left={{ label: "役職名", value: "課長" }} right={{ label: "等級", value: "等級B" }} />

          <div className="flex py-2 border-b border-gray-50">
            <span className="w-[130px] flex-shrink-0 text-sm font-medium text-gray-500">会社名</span>
            <span className="w-[200px] flex-shrink-0 text-sm text-gray-900">株式会社サンプル</span>
            <span className="w-[130px] flex-shrink-0 text-sm font-medium text-gray-500">所属部</span>
            <span className="text-sm text-gray-900">経理財務部</span>
          </div>
          <div className="flex py-2 border-b border-gray-50">
            <span className="w-[130px] flex-shrink-0 text-sm font-medium text-gray-500">所属本部</span>
            <span className="w-[200px] flex-shrink-0 text-sm text-gray-900">管理本部</span>
            <span className="w-[130px] flex-shrink-0 text-sm font-medium text-gray-500">所属グループ（課）</span>
            <span className="text-sm text-gray-900">財務課</span>
          </div>
          <div className="flex py-2 border-b border-gray-50">
            <span className="w-[130px] flex-shrink-0 text-sm font-medium text-gray-500">部長</span>
            <span className="w-[200px] flex-shrink-0 text-sm text-gray-900">部長 名前</span>
            <span className="w-[130px] flex-shrink-0 text-sm font-medium text-gray-500">課(室)長／GM</span>
            <span className="text-sm text-gray-900">GM 名前</span>
          </div>

          <DataRow label="キャリアフィールド" value="キャリアフィールド名" />
          <TwoColRow left={{ label: "本部役割区分", value: "役割区分" }} />
          <DataRow label="分" value="：" />
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6 space-y-3">
          <TwoColRow left={{ label: "生年月日", value: "1984-05-12" }} right={{ label: "結婚日", value: "2012-06-15" }} />
          <DataRow label="戸籍氏名（漢字）" value="東京都" />
          <TwoColRow left={{ label: "戸籍氏名（かな）", value: "とうきょうと" }} />
          <TwoColRow left={{ label: "現住所 郵便番号", value: "100-0001" }} right={{ label: "電話番号", value: "03-1111-0001" }} />
          <DataRow label="住所" value="東京都千代田区千代田1-1-1" />
          <DataRow label="住所（かな）" value="とうきょうとちよだくちよだ1-1-1" />
          <TwoColRow left={{ label: "住居区分", value: "持家" }} />
          <DataRow label="住所変更日" value="2024-04-01" />

          <Separator className="my-4" />

          <TwoColRow left={{ label: "緊急連絡先", value: "090-1111-0001" }} right={{ label: "続柄", value: "配偶者" }} />
          <DataRow label="緊急連絡先氏名" value="山田 由美" />
          <TwoColRow left={{ label: "（単身赴任）郵便番号", value: "530-0001" }} right={{ label: "電話番号", value: "06-3333-0001" }} />
          <DataRow label="住所" value="大阪府大阪市北区梅田2-2" />
          <DataRow label="住所（かな）" value="おおさかふおおさかしきたくうめだ2-2-2" />
          <DataRow label="住所変更日" value="2023-10-01" />

          <Separator className="my-4" />

          <TwoColRow left={{ label: "通勤情報 通勤時間", value: "35分" }} right={{ label: "住居区分号", value: "社宅" }} />
          <TwoColRow left={{ label: "最寄駅", value: "東京駅" }} />

          <Separator className="my-4" />

          <TwoColRow left={{ label: "本人実家 郵便番号", value: "150-0001" }} right={{ label: "電話番号", value: "090-1111-9001" }} />
          <DataRow label="住所" value="東京都渋谷区神宮前2-2-2" />
          <DataRow label="住所（かな）" value="とうきょうとしぶやくじんぐうまえ2-2-2" />
          <TwoColRow left={{ label: "配偶者実家 郵便番号", value: "180-0001" }} right={{ label: "電話番号", value: "0422-11-0001" }} />
          <DataRow label="住所" value="東京都武蔵野市吉祥寺3-3" />
          <DataRow label="住所（かな）" value="とうきょうとむさしのしきちじょうじ3-3-3" />
          <DataRow label="姓" value="佐藤" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base font-bold">学 歴</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs">出身校</TableHead>
                <TableHead className="text-xs">学部名</TableHead>
                <TableHead className="text-xs">学科名</TableHead>
                <TableHead className="text-xs">学歴区分</TableHead>
                <TableHead className="text-xs">入学日</TableHead>
                <TableHead className="text-xs">終了日</TableHead>
                <TableHead className="text-xs">信考</TableHead>
                <TableHead className="text-xs">卒業</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-sm">AAA</TableCell>
                <TableCell className="text-sm">AAA学部</TableCell>
                <TableCell className="text-sm">AAA学</TableCell>
                <TableCell className="text-sm">AAA学部</TableCell>
                <TableCell className="text-sm">1997/04</TableCell>
                <TableCell className="text-sm">2000/03</TableCell>
                <TableCell className="text-sm">none</TableCell>
                <TableCell className="text-sm">卒業</TableCell>
              </TableRow>
              <TableRow>
                <TableRow>
                  <TableCell className="text-sm">BBB</TableCell>
                  <TableCell className="text-sm">BBB学部</TableCell>
                  <TableCell className="text-sm">BBBB</TableCell>
                  <TableCell className="text-sm" />
                  <TableCell className="text-sm">1997/04</TableCell>
                  <TableCell className="text-sm">2000/03</TableCell>
                  <TableCell className="text-sm">none</TableCell>
                  <TableCell className="text-sm">卒業</TableCell>
                </TableRow>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
