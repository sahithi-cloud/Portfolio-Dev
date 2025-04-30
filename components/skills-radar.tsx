"use client"

import { motion } from "framer-motion"
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Skill {
  name: string
  level: number
}

interface SkillsRadarProps {
  skills: Skill[]
  title: string
  onClose: () => void
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-vscodePanel p-2 rounded-md border border-vscodeBorder text-vscodeText shadow-md">
        <p className="font-medium text-vscodeGreen whitespace-nowrap">{payload[0].payload.name}</p>
        <p className="text-xs whitespace-nowrap">{`Proficiency: ${payload[0].value}%`}</p>
      </div>
    )
  }
  return null
}

export default function SkillsRadar({ skills, title, onClose }: SkillsRadarProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 bg-vscodeBg/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-4xl sm:h-full max-h-[90vh] sm:max-h-[90vh] h-fit"
        onClick={(e) => e.stopPropagation()}
      >
        <Card className="w-full h-full bg-vscodePanel border border-vscodeBorder text-vscodeText overflow-hidden">
          <CardHeader className="flex items-center justify-between border-b border-vscodeBorder">
            <CardTitle className="text-base text-vscodeBlue whitespace-nowrap overflow-hidden text-ellipsis">
              {title} Skills
            </CardTitle>
            <button
              onClick={onClose}
              className="text-xs text-vscodeGreen hover:underline"
            >
              Close
            </button>
          </CardHeader>
          <CardContent className="p-2 sm:p-4 h-full">
            <div className="w-full h-[60vh] sm:h-[70vh] overflow-auto">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={skills}>
                  <PolarGrid stroke="#444" />
                  <PolarAngleAxis
                    dataKey="name"
                    tick={{ fill: "#ccc", fontSize: 12 }}
                    stroke="#555"
                  />
                  <PolarRadiusAxis
                    angle={30}
                    domain={[0, 100]}
                    stroke="#555"
                    tick={{ fill: "#999", fontSize: 10 }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Radar
                    name="Skill Level"
                    dataKey="level"
                    stroke="#00ff99"
                    fill="#00ff99"
                    fillOpacity={0.2}
                    animationDuration={1000}
                    animationEasing="ease-out"
                    isAnimationActive={true}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
