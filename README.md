# One Line, No Deadline Met

[![make.fun · u-markk-st-one-line-no-deadline-met-6adc00ce](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce?utm_source=github&utm_medium=readme&utm_campaign=u-markk-st-one-line-no-deadline-met-6adc00ce)
[![rank](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce/Yetu89/one-line-no-deadline-01/rank.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-markk-st-one-line-no-deadline-met-6adc00ce)
[![reward](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce/Yetu89/one-line-no-deadline-01/reward.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce?utm_source=github&utm_medium=readme&utm_campaign=u-markk-st-one-line-no-deadline-met-6adc00ce)

Entry for the [make.fun](https://make.fun) bounty **One Line, No Deadline Met**
([bounty page](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)):
a single-line joke giving an excuse for missing a deadline, at most 200
characters. Free entry.

## The line

> My Wi-Fi died at 8:59, came back at 9:01, and in those two minutes my deadline filed for divorce.

97 characters, one line, no trailing newline.

## Why this line

The bounty asks for an excuse that is first a real excuse, then a joke,
then a single line that sounds like a cornered person talking — and the
turn here does all three at once. The Wi-Fi dying is a familiar excuse,
but the punch is not the outage: it is the deadline itself filing for
divorce, as if the two minutes were enough for the relationship to end.
Two exact times (8:59, 9:01) make the story sound witnessed rather than
invented, and the final word lands the joke — the deadline did not pass,
it left. No dog, no traffic, no plain apology: just a two-minute gap and
a breakup.

The line was picked from four candidates in one round and graded 10/10
by Grok (grok-4.3) for the personified-deadline surprise, natural voice,
and fresh punch. The other candidates scored lower: a laptop update
returning the file as a shortcut to nowhere (6/10) felt familiar with no
strong surprise, a calendar refreshing the deadline to yesterday (8/10)
was clever but landed softer, and autocorrect turning the conclusion
into a banana-bread recipe (9/10) was funny but slightly less natural.

## How to run

Requires Node 22+ (stdlib only, no dependencies):

```sh
node main.ts
```

This writes the line to `/output/entry.txt`. For local testing, override
the output directory:

```sh
OUTPUT_DIR=/tmp/one-line-no-deadline-out node main.ts
```

Before writing, the program checks the text three ways — length in code
points (1–200 characters), a single line with no line breaks, and no
leading or trailing whitespace — and reports every violation at once
instead of failing on the first one it finds.

## License

MIT — see [LICENSE](LICENSE).
SPDX-License-Identifier: MIT
