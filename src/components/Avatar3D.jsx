import { motion } from 'framer-motion'

export default function Avatar3D() {
  return (
    <motion.div
      className="relative w-72 h-[400px] md:w-80 md:h-[440px] mx-auto"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* Glow behind avatar */}
      <div className="absolute inset-0 bg-gradient-to-b from-neon-pink/20 via-neon-purple/10 to-transparent rounded-full blur-3xl" />

      {/* Platform glow */}
      <motion.div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-52 h-8 rounded-full bg-neon-cyan/15 blur-xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <svg viewBox="0 0 260 360" className="relative z-10 w-full h-full drop-shadow-2xl">
        <defs>
          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f5d0b0" />
            <stop offset="100%" stopColor="#e8b88a" />
          </linearGradient>
          <linearGradient id="skinShadow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5d0b0" />
            <stop offset="50%" stopColor="#e8b88a" />
            <stop offset="100%" stopColor="#d4a070" />
          </linearGradient>
          <linearGradient id="hairDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a0a0a" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </linearGradient>
          <linearGradient id="hairMid" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#111111" />
          </linearGradient>
          <linearGradient id="hairHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2a2a2a" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </linearGradient>
          <linearGradient id="topGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a1a2e" />
            <stop offset="100%" stopColor="#0f0f1a" />
          </linearGradient>
          <linearGradient id="lipGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e86b7a" />
            <stop offset="100%" stopColor="#c4505e" />
          </linearGradient>
          <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1a1a2e" />
          </linearGradient>
          <linearGradient id="laptopBody" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2a2a3e" />
            <stop offset="100%" stopColor="#1a1a28" />
          </linearGradient>
          <radialGradient id="cheekBlush" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff8a9e" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ff8a9e" stopOpacity="0" />
          </radialGradient>
          <filter id="neonGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="softShadow">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* === LAPTOP === */}
        {/* Laptop screen */}
        <g filter="url(#softShadow)">
          <rect x="55" y="225" width="150" height="90" rx="5" fill="#1e1e2e" stroke="#333" strokeWidth="1.5" />
          <rect x="61" y="231" width="138" height="78" rx="2" fill="url(#screenGrad)" />

          {/* Screen content - animated code */}
          <motion.g>
            {/* Line 1 */}
            <motion.rect x="68" y="238" rx="1" height="3" fill="#ff2d9b" opacity="0.8"
              initial={{ width: 0 }}
              animate={{ width: [0, 35, 35] }}
              transition={{ duration: 1.5, delay: 0, repeat: Infinity, repeatDelay: 5 }}
            />
            {/* Line 2 */}
            <motion.rect x="68" y="246" rx="1" height="3" fill="#00f0ff" opacity="0.6"
              initial={{ width: 0 }}
              animate={{ width: [0, 55, 55] }}
              transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, repeatDelay: 5 }}
            />
            {/* Line 3 */}
            <motion.rect x="78" y="254" rx="1" height="3" fill="#39ff14" opacity="0.5"
              initial={{ width: 0 }}
              animate={{ width: [0, 40, 40] }}
              transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatDelay: 5 }}
            />
            {/* Line 4 */}
            <motion.rect x="78" y="262" rx="1" height="3" fill="#b026ff" opacity="0.5"
              initial={{ width: 0 }}
              animate={{ width: [0, 65, 65] }}
              transition={{ duration: 1.5, delay: 1.5, repeat: Infinity, repeatDelay: 5 }}
            />
            {/* Line 5 */}
            <motion.rect x="68" y="270" rx="1" height="3" fill="#00f0ff" opacity="0.5"
              initial={{ width: 0 }}
              animate={{ width: [0, 48, 48] }}
              transition={{ duration: 1.5, delay: 2, repeat: Infinity, repeatDelay: 5 }}
            />
            {/* Line 6 */}
            <motion.rect x="68" y="278" rx="1" height="3" fill="#ff2d9b" opacity="0.6"
              initial={{ width: 0 }}
              animate={{ width: [0, 30, 30] }}
              transition={{ duration: 1.5, delay: 2.5, repeat: Infinity, repeatDelay: 5 }}
            />
            {/* Line 7 */}
            <motion.rect x="78" y="286" rx="1" height="3" fill="#39ff14" opacity="0.4"
              initial={{ width: 0 }}
              animate={{ width: [0, 50, 50] }}
              transition={{ duration: 1.5, delay: 3, repeat: Infinity, repeatDelay: 5 }}
            />
            {/* Line 8 */}
            <motion.rect x="68" y="294" rx="1" height="3" fill="#b026ff" opacity="0.5"
              initial={{ width: 0 }}
              animate={{ width: [0, 42, 42] }}
              transition={{ duration: 1.5, delay: 3.5, repeat: Infinity, repeatDelay: 5 }}
            />

            {/* Blinking cursor */}
            <motion.rect x="68" y="302" width="2" height="4" fill="#00f0ff"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.g>

          {/* Screen glow reflection */}
          <motion.rect x="61" y="231" width="138" height="78" rx="2" fill="none"
            stroke="#00f0ff" strokeWidth="0.5" opacity="0.2"
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </g>

        {/* Laptop base/keyboard */}
        <path d="M45 315 L65 315 Q55 320 45 322 L215 322 Q205 320 195 315 L215 315" fill="url(#laptopBody)" stroke="#333" strokeWidth="0.5" />
        <rect x="55" y="315" width="150" height="2" fill="#2a2a3e" />

        {/* Laptop keyboard line */}
        <rect x="70" y="317" width="120" height="1" fill="#333" rx="0.5" />

        {/* Laptop screen glow on desk */}
        <motion.ellipse cx="130" cy="330" rx="60" ry="8" fill="#00f0ff" opacity="0.04"
          animate={{ opacity: [0.02, 0.06, 0.02] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* === BODY === */}
        <path
          d="M80 205 Q80 185 98 178 L130 172 L162 178 Q180 185 180 205 L180 320 L80 320 Z"
          fill="url(#topGrad)"
          stroke="#2a2a3e"
          strokeWidth="0.5"
        />
        {/* Neon accent on top */}
        <motion.line
          x1="130" y1="182" x2="130" y2="240"
          stroke="#ff2d9b" strokeWidth="1" filter="url(#neonGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2, delay: 1 }}
        />

        {/* V-neck */}
        <path d="M112 178 L130 196 L148 178" fill="#0f172a" />

        {/* Neck */}
        <path d="M118 162 Q118 172 115 178 L145 178 Q142 172 142 162 Z" fill="url(#skinGrad)" />

        {/* === ARMS === */}
        {/* Left arm - reaching to laptop */}
        <path
          d="M80 195 Q65 210 60 230 Q55 245 68 260 Q75 268 85 272"
          fill="none" stroke="url(#topGrad)" strokeWidth="22" strokeLinecap="round"
        />
        {/* Left hand on keyboard */}
        <g>
          <ellipse cx="88" cy="310" rx="10" ry="7" fill="url(#skinGrad)" />
          {/* Fingers typing */}
          <motion.g animate={{ y: [0, -2, 0] }} transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 0.4 }}>
            <rect x="80" y="305" width="4" height="8" rx="2" fill="url(#skinGrad)" />
          </motion.g>
          <motion.g animate={{ y: [0, -2, 0] }} transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 0.6, delay: 0.15 }}>
            <rect x="85" y="304" width="4" height="9" rx="2" fill="url(#skinGrad)" />
          </motion.g>
          <motion.g animate={{ y: [0, -2, 0] }} transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 0.5, delay: 0.3 }}>
            <rect x="90" y="305" width="4" height="8" rx="2" fill="url(#skinGrad)" />
          </motion.g>
          <motion.g animate={{ y: [0, -2, 0] }} transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 0.7, delay: 0.1 }}>
            <rect x="95" y="306" width="3" height="7" rx="1.5" fill="url(#skinGrad)" />
          </motion.g>
        </g>

        {/* Right arm - reaching to laptop */}
        <path
          d="M180 195 Q195 210 200 230 Q205 245 192 260 Q185 268 175 272"
          fill="none" stroke="url(#topGrad)" strokeWidth="22" strokeLinecap="round"
        />
        {/* Right hand on keyboard */}
        <g>
          <ellipse cx="172" cy="310" rx="10" ry="7" fill="url(#skinGrad)" />
          {/* Fingers typing */}
          <motion.g animate={{ y: [0, -2, 0] }} transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 0.5, delay: 0.2 }}>
            <rect x="164" y="305" width="4" height="8" rx="2" fill="url(#skinGrad)" />
          </motion.g>
          <motion.g animate={{ y: [0, -2, 0] }} transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 0.4, delay: 0.35 }}>
            <rect x="169" y="304" width="4" height="9" rx="2" fill="url(#skinGrad)" />
          </motion.g>
          <motion.g animate={{ y: [0, -2, 0] }} transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 0.6, delay: 0.05 }}>
            <rect x="174" y="305" width="4" height="8" rx="2" fill="url(#skinGrad)" />
          </motion.g>
          <motion.g animate={{ y: [0, -2, 0] }} transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 0.5, delay: 0.25 }}>
            <rect x="179" y="306" width="3" height="7" rx="1.5" fill="url(#skinGrad)" />
          </motion.g>
        </g>

        {/* === HEAD === */}
        <ellipse cx="130" cy="120" rx="42" ry="48" fill="url(#skinShadow)" />
        <path d="M88 120 Q90 155 130 167 Q170 155 172 120" fill="url(#skinGrad)" />

        {/* === WAVY HAIR === */}
        {/* Main volume top */}
        <motion.path
          d="M85 110 Q85 58 130 53 Q175 58 175 110 Q177 88 170 72 Q155 50 130 47 Q105 50 90 72 Q83 88 85 110 Z"
          fill="url(#hairDark)"
          animate={{
            d: [
              "M85 110 Q85 58 130 53 Q175 58 175 110 Q177 88 170 72 Q155 50 130 47 Q105 50 90 72 Q83 88 85 110 Z",
              "M86 110 Q86 59 130 54 Q174 59 174 110 Q176 88 169 72 Q154 50 130 47 Q106 50 91 72 Q84 88 86 110 Z",
              "M85 110 Q85 58 130 53 Q175 58 175 110 Q177 88 170 72 Q155 50 130 47 Q105 50 90 72 Q83 88 85 110 Z",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* LEFT SIDE - wavy strands with S-curves */}
        <motion.path
          d="M85 105 Q75 115 72 130 Q68 148 74 165 Q78 180 72 198 Q66 215 70 230"
          fill="none" stroke="url(#hairDark)" strokeWidth="20" strokeLinecap="round"
          animate={{
            d: [
              "M85 105 Q75 115 72 130 Q68 148 74 165 Q78 180 72 198 Q66 215 70 230",
              "M85 105 Q72 118 68 134 Q63 152 70 168 Q76 184 68 202 Q62 218 67 233",
              "M85 105 Q78 113 74 128 Q71 145 76 162 Q80 177 74 195 Q69 212 72 228",
              "M85 105 Q75 115 72 130 Q68 148 74 165 Q78 180 72 198 Q66 215 70 230",
            ],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.path
          d="M88 98 Q80 110 78 128 Q75 148 80 162 Q84 178 78 195 Q73 208 75 220"
          fill="none" stroke="url(#hairMid)" strokeWidth="13" strokeLinecap="round"
          animate={{
            d: [
              "M88 98 Q80 110 78 128 Q75 148 80 162 Q84 178 78 195 Q73 208 75 220",
              "M88 98 Q77 113 74 132 Q71 152 77 166 Q82 182 75 199 Q70 212 73 223",
              "M88 98 Q82 108 80 126 Q77 145 82 160 Q86 175 80 192 Q76 206 77 218",
              "M88 98 Q80 110 78 128 Q75 148 80 162 Q84 178 78 195 Q73 208 75 220",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        />
        <motion.path
          d="M90 92 Q84 105 83 120 Q82 138 86 152 Q89 168 84 185 Q80 198 82 208"
          fill="none" stroke="url(#hairHighlight)" strokeWidth="7" strokeLinecap="round"
          animate={{
            d: [
              "M90 92 Q84 105 83 120 Q82 138 86 152 Q89 168 84 185 Q80 198 82 208",
              "M90 92 Q81 108 80 124 Q78 142 83 156 Q87 172 81 189 Q77 202 80 211",
              "M90 92 Q86 103 85 118 Q84 135 88 150 Q91 165 86 182 Q83 196 84 206",
              "M90 92 Q84 105 83 120 Q82 138 86 152 Q89 168 84 185 Q80 198 82 208",
            ],
          }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        />

        {/* RIGHT SIDE - wavy strands with S-curves */}
        <motion.path
          d="M175 105 Q185 115 188 130 Q192 148 186 165 Q182 180 188 198 Q194 215 190 230"
          fill="none" stroke="url(#hairDark)" strokeWidth="20" strokeLinecap="round"
          animate={{
            d: [
              "M175 105 Q185 115 188 130 Q192 148 186 165 Q182 180 188 198 Q194 215 190 230",
              "M175 105 Q188 118 192 134 Q197 152 190 168 Q184 184 192 202 Q198 218 193 233",
              "M175 105 Q182 113 186 128 Q189 145 184 162 Q180 177 186 195 Q191 212 188 228",
              "M175 105 Q185 115 188 130 Q192 148 186 165 Q182 180 188 198 Q194 215 190 230",
            ],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        />
        <motion.path
          d="M172 98 Q180 110 182 128 Q185 148 180 162 Q176 178 182 195 Q187 208 185 220"
          fill="none" stroke="url(#hairMid)" strokeWidth="13" strokeLinecap="round"
          animate={{
            d: [
              "M172 98 Q180 110 182 128 Q185 148 180 162 Q176 178 182 195 Q187 208 185 220",
              "M172 98 Q183 113 186 132 Q189 152 183 166 Q178 182 185 199 Q190 212 187 223",
              "M172 98 Q178 108 180 126 Q183 145 178 160 Q174 175 180 192 Q184 206 183 218",
              "M172 98 Q180 110 182 128 Q185 148 180 162 Q176 178 182 195 Q187 208 185 220",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
        <motion.path
          d="M170 92 Q176 105 177 120 Q178 138 174 152 Q171 168 176 185 Q180 198 178 208"
          fill="none" stroke="url(#hairHighlight)" strokeWidth="7" strokeLinecap="round"
          animate={{
            d: [
              "M170 92 Q176 105 177 120 Q178 138 174 152 Q171 168 176 185 Q180 198 178 208",
              "M170 92 Q179 108 180 124 Q182 142 177 156 Q173 172 179 189 Q183 202 180 211",
              "M170 92 Q174 103 175 118 Q176 135 172 150 Q169 165 174 182 Q177 196 176 206",
              "M170 92 Q176 105 177 120 Q178 138 174 152 Q171 168 176 185 Q180 198 178 208",
            ],
          }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        />

        {/* Front wavy bangs */}
        <motion.path
          d="M98 68 Q90 82 88 100 Q87 108 89 115"
          fill="none" stroke="url(#hairDark)" strokeWidth="8" strokeLinecap="round"
          animate={{
            d: [
              "M98 68 Q90 82 88 100 Q87 108 89 115",
              "M98 68 Q87 84 85 103 Q84 111 87 118",
              "M98 68 Q92 80 90 98 Q89 106 91 113",
              "M98 68 Q90 82 88 100 Q87 108 89 115",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        />
        <motion.path
          d="M162 68 Q170 82 172 100 Q173 108 171 115"
          fill="none" stroke="url(#hairDark)" strokeWidth="8" strokeLinecap="round"
          animate={{
            d: [
              "M162 68 Q170 82 172 100 Q173 108 171 115",
              "M162 68 Q173 84 175 103 Q176 111 173 118",
              "M162 68 Q168 80 170 98 Q171 106 169 113",
              "M162 68 Q170 82 172 100 Q173 108 171 115",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
        />

        {/* === FACE === */}
        {/* Eyebrows */}
        <path d="M104 102 Q111 97 120 100" stroke="#111" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M140 100 Q149 97 156 102" stroke="#111" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Eyes */}
        <ellipse cx="113" cy="112" rx="7" ry="7" fill="white" />
        <ellipse cx="147" cy="112" rx="7" ry="7" fill="white" />
        {/* Iris */}
        <motion.ellipse cx="114" cy="113" rx="4" ry="4.5" fill="#2a1a0e"
          animate={{ cx: [114, 112, 114] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.ellipse cx="148" cy="113" rx="4" ry="4.5" fill="#2a1a0e"
          animate={{ cx: [148, 146, 148] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Pupils - looking at screen */}
        <motion.circle cx="113" cy="114" r="2" fill="#111"
          animate={{ cx: [113, 111, 113], cy: [114, 115, 114] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.circle cx="147" cy="114" r="2" fill="#111"
          animate={{ cx: [147, 145, 147], cy: [114, 115, 114] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Eye shine */}
        <circle cx="116" cy="110" r="1.5" fill="white" opacity="0.9" />
        <circle cx="150" cy="110" r="1.5" fill="white" opacity="0.9" />
        <circle cx="112" cy="115" r="0.8" fill="white" opacity="0.4" />
        <circle cx="146" cy="115" r="0.8" fill="white" opacity="0.4" />

        {/* Glasses */}
        <rect x="100" y="104" width="26" height="20" rx="4" fill="none" stroke="#1a1a2e" strokeWidth="2.2" opacity="0.85" />
        <rect x="134" y="104" width="26" height="20" rx="4" fill="none" stroke="#1a1a2e" strokeWidth="2.2" opacity="0.85" />
        {/* Bridge */}
        <path d="M126 112 Q130 108 134 112" fill="none" stroke="#1a1a2e" strokeWidth="2" opacity="0.85" />
        {/* Temple arms */}
        <line x1="100" y1="110" x2="89" y2="108" stroke="#1a1a2e" strokeWidth="2" opacity="0.7" />
        <line x1="160" y1="110" x2="171" y2="108" stroke="#1a1a2e" strokeWidth="2" opacity="0.7" />
        {/* Lens reflection */}
        <motion.rect x="103" y="107" width="6" height="3" rx="1" fill="white" opacity="0.08"
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.rect x="137" y="107" width="6" height="3" rx="1" fill="white" opacity="0.08"
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />

        {/* Eyelashes */}
        <path d="M105 108 Q107 104 110 106" stroke="#111" strokeWidth="1" fill="none" />
        <path d="M103 111 Q105 107 108 109" stroke="#111" strokeWidth="0.8" fill="none" />
        <path d="M155 108 Q153 104 150 106" stroke="#111" strokeWidth="1" fill="none" />
        <path d="M157 111 Q155 107 152 109" stroke="#111" strokeWidth="0.8" fill="none" />

        {/* Cheek blush */}
        <circle cx="100" cy="126" r="10" fill="url(#cheekBlush)" />
        <circle cx="160" cy="126" r="10" fill="url(#cheekBlush)" />

        {/* Nose */}
        <path d="M128 122 Q130 128 132 122" stroke="#d4a070" strokeWidth="1.2" fill="none" />

        {/* Lips - slight smile */}
        <path d="M118 138 Q124 134 130 136 Q136 134 142 138" fill="url(#lipGrad)" stroke="#c4505e" strokeWidth="0.5" />
        <path d="M118 138 Q130 147 142 138" fill="url(#lipGrad)" opacity="0.85" />
        <ellipse cx="128" cy="137" rx="3" ry="1" fill="white" opacity="0.15" />

        {/* === FLOATING ELEMENTS === */}
        <motion.text
          x="15" y="80" fontSize="18" fill="#00f0ff" filter="url(#neonGlow)" fontFamily="monospace"
          animate={{ y: [80, 70, 80], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {'</>'}
        </motion.text>
        <motion.text
          x="215" y="85" fontSize="16" fill="#ff2d9b" filter="url(#neonGlow)" fontFamily="monospace"
          animate={{ y: [85, 75, 85], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        >
          {'{ }'}
        </motion.text>
        <motion.circle
          cx="225" cy="155" r="3" fill="none" stroke="#39ff14" strokeWidth="1.5"
          filter="url(#neonGlow)"
          animate={{ r: [3, 5, 3], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />
        <motion.circle
          cx="25" cy="170" r="2.5" fill="none" stroke="#b026ff" strokeWidth="1.5"
          filter="url(#neonGlow)"
          animate={{ r: [2.5, 4.5, 2.5], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        />

        {/* Sparkle */}
        <motion.g
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        >
          <line x1="20" y1="125" x2="20" y2="135" stroke="#ff2d9b" strokeWidth="1.5" filter="url(#neonGlow)" />
          <line x1="15" y1="130" x2="25" y2="130" stroke="#ff2d9b" strokeWidth="1.5" filter="url(#neonGlow)" />
        </motion.g>
        <motion.g
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1.5 }}
        >
          <line x1="235" y1="195" x2="235" y2="205" stroke="#00f0ff" strokeWidth="1.5" filter="url(#neonGlow)" />
          <line x1="230" y1="200" x2="240" y2="200" stroke="#00f0ff" strokeWidth="1.5" filter="url(#neonGlow)" />
        </motion.g>
      </svg>
    </motion.div>
  )
}
