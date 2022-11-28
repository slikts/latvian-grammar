// http://valoda.ailab.lv/latval/vidusskolai/morfol/lietv-mija.htm

import { DeclensionType } from './decline'

const palatalize = (
  word: string,
  { declensionCase, suffix }: DeclensionType,
) => {
  const base = word.slice(0, -suffix.length)
  if (
    !table[declensionCase] ||
    exceptions[declensionCase].includes(word) ||
    exceptionSuffixes[declensionCase].some((x) => word.endsWith(x))
  ) {
    return base
  }

  for (const [from, to] of entryTable[declensionCase]) {
    if (base.endsWith(from)) {
      return `${base.slice(0, -from.length)}${to}`
    }
  }
}

export default palatalize

// NB: relies on key order to be in descending length
export const table: Record<number, Record<string, string>> = {
  2: {
    dz: 'dž',
    sn: 'šņ',
    zn: 'žņ',
    sl: 'šļ',
    zl: 'žļ',
    ln: 'ļņ',
    b: 'bj',
    m: 'mj',
    p: 'pj',
    v: 'vj',
    t: 'š',
    d: 'ž',
    c: 'č',
    s: 'š',
    z: 'ž',
    n: 'ņ',
    l: 'ļ',
  },
  5: {
    sn: 'šņ',
    zn: 'žņ',
    dz: 'dž',
    kst: 'kp',
    b: 'bj',
    m: 'mj',
    p: 'pj',
    v: 'vj',
    c: 'č',
    t: 'š',
    d: 'ž',
    s: 'š',
    z: 'ž',
    n: 'ņ',
    l: 'ļ',
  },
  6: {
    sn: 'šņ',
    st: 'š',
    v: 'vj',
    t: 'š',
    d: 'ž',
    s: 'š',
    z: 'ž',
    n: 'ņ',
    l: 'ļ',
  },
}

const entryTable = Object.fromEntries(
  Object.entries(table).map(([k, v]) => [k, Object.entries(v)]),
)

const exceptionSuffixes: Record<number, string[]> = {
  2: ['astis', 'jis', 'ķis', 'ģis', 'ris', 'skatis'],
  5: ['aste', 'fe', 'ģe', 'ķe', 'mate', 'pēde', 'ste'],
}

const exceptions: Record<number, string[]> = {
  2: ['tētis', 'viesis'],
  5: [
    'apaļmute',
    'apšaude',
    'balamute',
    'balle (mērvienība)',
    'bāze',
    'bise',
    'bote',
    'brīze',
    'flote',
    'fronte',
    'gāze (vielas stāvoklis)',
    'gide',
    'kase',
    'kušete',
    'mise',
    'mute',
    'pase',
    'piešaude',
    'planšete',
    'rase',
    'sarakste',
    'šprote',
    'takse',
    'tirāde',
  ],
  6: [
    'acs',
    'aktis',
    'ass',
    'auss',
    'balss',
    'brokastis',
    'Cēsis',
    'dakts',
    'debess',
    'dzelzs',
    'kūts',
    'maksts',
    'pirts',
    'šalts',
    'takts (mūzikā)',
    'uts',
    'uzacs',
    'valsts',
    'vēsts',
    'zoss',
    'žults',
  ],
}

for (const i of Array.from({ length: 6 }, (_, i) => i + 1)) {
  if (!exceptionSuffixes[i]) {
    exceptionSuffixes[i] = []
  }
  if (!exceptions[i]) {
    exceptions[i] = []
  }
}

// const masculinePluralOnly = ["akmens", "asmens", "rudens", "zibens", "ūdens", "mēness", "sāls"];
// const masculineTwoSyllableSuffixes = ["tis", "dis"];
