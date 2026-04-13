"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <main className="bg-white text-black px-6 py-16">

            <div className="max-w-4xl mx-auto">

                {/* НАЗАД */}
                <button
                    onClick={() => router.back()}
                    className="mb-10 text-sm text-gray-400 hover:text-black transition flex items-center gap-2"
                >
                    ← Назад
                </button>

                {/* HERO */}
                <div className="grid md:grid-cols-2 gap-10 items-center mb-16">

                    {/* КАРТИНКА */}
                    <motion.img
                        src="/images/south-g7.jpg"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="w-full max-w-[360px] mx-auto object-contain"
                    />

                    {/* ТЕКСТ */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
                            South Galaxy G7
                        </h1>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Современный GNSS-приемник с поддержкой 5G и RTK,
                            созданный для высокой скорости, стабильности и точности
                            в любых условиях.
                        </p>

                        <p className="text-gray-400 text-sm">
                            RTK до 1 см • 5G • GPS / GLONASS • IP68
                        </p>
                    </motion.div>

                </div>

                {/* ОСНОВНОЙ БЛОК (СТЕКЛО) */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative mb-14 p-6 md:p-8 rounded-2xl 
          bg-white/60 backdrop-blur-xl 
          border border-gray-200/50 
          shadow-[0_10px_40px_rgba(0,0,0,0.06)] 
          overflow-hidden"
                >

                    {/* АНИМИРОВАННЫЙ ФОН */}
                    <motion.div
                        className="absolute inset-0 opacity-30"
                        animate={{
                            background: [
                                "radial-gradient(circle at 20% 20%, #00C97B20, transparent 40%)",
                                "radial-gradient(circle at 80% 80%, #00C97B20, transparent 40%)",
                                "radial-gradient(circle at 20% 20%, #00C97B20, transparent 40%)",
                            ],
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                    />

                    {/* ТЕКСТ */}
                    <div className="relative space-y-4 text-gray-700 leading-relaxed">

                        <p>
                            South Galaxy G7 оснащен высокоскоростным 5G модулем,
                            который обеспечивает мгновенную передачу данных и стабильную работу RTK
                            даже при высокой нагрузке.
                        </p>

                        <p>
                            Интеллектуальная технология PPP автоматически поддерживает соединение,
                            позволяя работать без перебоев и потери сигнала в реальном времени.
                        </p>

                        <p>
                            Благодаря высокой пропускной способности и оптимизированному энергопотреблению,
                            приемник обрабатывает большие объемы данных быстрее,
                            снижая нагрузку и увеличивая эффективность работы.
                        </p>

                    </div>
                </motion.div>

                {/* ФИЧИ */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-14 space-y-6"
                >

                    <div>
                        <p className="text-sm text-gray-400 mb-2">
                            Преимущества
                        </p>

                        <div className="text-gray-600 space-y-2 leading-relaxed">
                            <p>• Радиомодуль до 15 км (Far-link)</p>
                            <p>• Снижение энергопотребления до 60%</p>
                            <p>• Цветной HD дисплей 1.54”</p>
                            <p>• Работа в экстремальных температурах</p>
                            <p>• Поддержка нескольких спутниковых систем</p>
                        </div>
                    </div>

                    <div className="text-gray-600 space-y-2 leading-relaxed">
                        <p>• Защита IP68 — пыль, вода, дождь</p>
                        <p>• Прочный корпус из магниевого сплава</p>
                        <p>• Устойчивость к ударам и вибрациям</p>
                        <p>• Надежный кейс + трансформация в рюкзак</p>
                    </div>

                </motion.div>

                {/* ПРИМЕНЕНИЕ */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <p className="text-sm text-gray-400 mb-2">
                        Применение
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                        RTK съемка • Вынос точек • Геодезия • Земельные работы • Строительство
                    </p>
                </motion.div>

                {/* АКЦЕНТ */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-xl md:text-2xl font-medium leading-snug text-center">
                        Скорость передачи, точность измерений и надежность —
                        новый стандарт GNSS оборудования.
                    </p>
                </motion.div>

                {/* CTA */}
                <motion.div
                    className="text-center"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <a
                        href="https://wa.me/87767390868"
                        className="bg-[#00C97B] text-white px-7 py-3 rounded-lg text-sm font-medium shadow hover:scale-105 transition"
                    >
                        Получить консультацию
                    </a>
                </motion.div>

            </div>

        </main>
    );
}