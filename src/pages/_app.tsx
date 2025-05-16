// app/page.tsx

'use client';

import React from "react";
import "../styles/globals.css";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wallet, Gift, ShoppingCart, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function RBCoinHome() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-800 text-white">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <img src="/logo.png" alt="RBCoin Logo" className="mx-auto w-24 h-24 mb-6" />
          <h1 className="text-4xl font-bold mb-4">RBCoin</h1>
          <p className="text-lg mb-6">실물 구매에 보상을 더하다. Web3 커머스의 시작.</p>
          <Button className="px-6 py-2 text-lg flex items-center gap-2">
            <Wallet className="w-5 h-5" /> 지갑 연결
          </Button>
        </motion.div>
      </section>

      {/* Token Info */}
      <section className="px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Card className="text-center">
          <CardContent className="p-6">
            <p className="text-sm text-gray-500">총 발행량</p>
            <p className="text-2xl font-bold">1,000,000,000 RBC</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-6">
            <p className="text-sm text-gray-500">컨트랙트 주소</p>
            <p className="text-sm break-words">0xb06bb6f12Db6Fc19c342635BfB937D1443214677</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-6">
            <p className="text-sm text-gray-500">초기 상장가</p>
            <p className="text-2xl font-bold">1 RBC ≈ 10원</p>
          </CardContent>
        </Card>
      </section>

      {/* How it Works */}
      <section className="bg-white py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">작동 방식</h2>
        <p className="max-w-xl mx-auto text-gray-600 mb-4">
          제품 구매 시 RBC 보상 지급 → 기프티콘 또는 현금화로 사용 가능 → 커뮤니티 내 자유로운 유통
        </p>
        <p className="text-sm text-blue-500">PancakeSwap 상장 및 기프티콘 연동 예정</p>
      </section>

      {/* Coming Soon Features */}
      <section className="py-12 px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="text-center">
          <CardContent className="p-6 flex flex-col items-center">
            <Gift className="w-8 h-8 mb-2 text-blue-500" />
            <p className="text-xl font-semibold">기프티콘 교환</p>
            <p className="text-gray-500 text-sm">Coming soon</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-6 flex flex-col items-center">
            <ShoppingCart className="w-8 h-8 mb-2 text-blue-500" />
            <p className="text-xl font-semibold">상품 구매</p>
            <p className="text-gray-500 text-sm">Coming soon</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-6 flex flex-col items-center">
            <Send className="w-8 h-8 mb-2 text-blue-500" />
            <p className="text-xl font-semibold">에어드랍 참여</p>
            <p className="text-gray-500 text-sm">Coming soon</p>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-blue-100 py-6 text-center text-sm text-gray-600">
        © 2025 RBTECH | 공식 블로그: blog.naver.com/rbtech2015 | 문의: rbtechchatgpt@gmail.com
      </footer>
    </main>
  );
}