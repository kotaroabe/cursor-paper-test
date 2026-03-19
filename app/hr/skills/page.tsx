"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from "recharts";

const SKILLS = [
  { skill: "AWS", score: 4.4 },
  { skill: "Java", score: 4.6 },
  { skill: "React", score: 4.1 },
  { skill: "SQL", score: 4.3 },
  { skill: "Docker", score: 3.8 },
  { skill: "設計力", score: 4.2 },
  { skill: "リーダーシップ", score: 3.9 },
];

const chartConfig: ChartConfig = {
  score: { label: "スコア", color: "hsl(200, 70%, 60%)" },
};

const TABS = ["能力チャート", "資格情報・語学情報", "講座受講情報", "対外発表"];

export default function SkillsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-bold">採用時情報</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs defaultValue="能力チャート">
          <TabsList className="bg-transparent border-b border-gray-200 rounded-none w-full justify-start gap-0 h-auto p-0">
            {TABS.map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:text-blue-600 data-[state=active]:shadow-none px-4 py-2.5 text-sm text-gray-500"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-blue-500">◎</span>
              <span className="font-bold text-gray-900">スキルチャート</span>
            </div>
            <div className="flex gap-2">
              <Badge variant="outline" className="text-xs">Tech Profile</Badge>
              <Badge variant="outline" className="text-xs">7 Axis Radar</Badge>
            </div>
          </div>

          <p className="text-xs text-gray-500">
            技術力と業務遂行力を7軸で可視化。現在値と期待値を重ねて、伸ばすべき領域を直感的に把握できます。
          </p>

          <div className="flex gap-2">
            <Badge className="bg-blue-500 hover:bg-blue-600 text-white text-xs">現在スキル</Badge>
            <Badge variant="outline" className="text-xs">期待値</Badge>
          </div>

          <div className="flex justify-center py-4">
            <ChartContainer config={chartConfig} className="w-[400px] h-[300px]">
              <RadarChart data={SKILLS}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="skill" tick={{ fontSize: 12, fill: "#6b7280" }} />
                <PolarRadiusAxis angle={90} domain={[0, 5]} tick={{ fontSize: 10, fill: "#9ca3af" }} tickCount={6} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Radar
                  name="score"
                  dataKey="score"
                  stroke="hsl(200, 70%, 50%)"
                  fill="hsl(200, 70%, 60%)"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
              </RadarChart>
            </ChartContainer>
          </div>

          <Table>
            <TableBody>
              <TableRow className="border-b border-gray-100">
                <TableCell className="text-sm font-medium text-gray-700 w-[120px]">AWS</TableCell>
                <TableCell className="text-sm text-blue-500 font-bold w-[60px]">4.4 / 5</TableCell>
                <TableCell className="text-sm font-medium text-gray-700 w-[120px]">Java</TableCell>
                <TableCell className="text-sm text-blue-500 font-bold w-[60px]">4.6 / 5</TableCell>
                <TableCell className="text-sm font-medium text-gray-700 w-[120px]">React</TableCell>
                <TableCell className="text-sm text-blue-500 font-bold">4.1 / 5</TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-100">
                <TableCell className="text-sm font-medium text-gray-700">SQL</TableCell>
                <TableCell className="text-sm text-blue-500 font-bold">4.3 / 5</TableCell>
                <TableCell className="text-sm font-medium text-gray-700">Docker</TableCell>
                <TableCell className="text-sm text-blue-500 font-bold">3.8 / 5</TableCell>
                <TableCell className="text-sm font-medium text-gray-700">設計力</TableCell>
                <TableCell className="text-sm text-blue-500 font-bold">4.2 / 5</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-sm font-medium text-gray-700">リーダーシップ</TableCell>
                <TableCell className="text-sm text-blue-500 font-bold">3.9 / 5</TableCell>
                <TableCell colSpan={4} />
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
