---
title: "Field notes: watching a classroom robot fail politely"
summary: "Process notes from observing a teaching-assistant robot with schoolchildren — and what its failures taught me about feedback, expectations, and designing for groups."
date: 2026-07-02
eyebrow: "Process notes"
tags:
  - Field research
  - Human-robot interaction
  - Feedback design
---

Some of the most useful design lessons I carry around did not come from a
product launch. They came from sitting in a classroom watching a
teaching-assistant robot try — and often fail — to hold a conversation with
a group of schoolchildren.

This is a set of process notes from that study. The full write-up lives in
the [HRI case study](/hri-study); these notes are about what the fieldwork
itself taught me, because the lessons have followed me into every complex
product I have worked on since.

## Enthusiasm is not the same as understanding

The children approached the robot with obvious enthusiasm. They were careful
with it, curious about it, and eager to get a response. That energy was an
asset, but it hid a problem: enthusiasm made every failure look temporarily
like success. The group leaned in, repeated themselves, and invented
workarounds — so on the surface, the interaction looked lively and engaged
even when the robot understood almost nothing.

I have seen the same pattern in enterprise tools. Motivated users will paper
over a broken workflow with spreadsheets and habit, and the system looks
fine in usage metrics right up until the moment it doesn't. Watching the
room, not the log, is what exposes it.

## Users adapt faster than systems do

Speech recognition was the most visible failure mode. Within minutes, the
children had tried spelling commands letter by letter, speaking closer to
the robot's microphone, and finally asking the teacher to repeat the same
command — because they had already learned that adult speech was recognized
more reliably.

Nobody taught them that. They ran their own experiments and converged on a
working theory of the system faster than the system could explain itself.
The design lesson: people will always build a mental model of how your
product works. The only question is whether the product's feedback helps
them build a correct one.

## The system attends to the wrong person

The robot tended to orient toward the teacher, even when the children were
the ones trying to establish contact. In practice, the teacher had to turn
the robot manually so its face and eyes stayed with the group.

That small mechanical detail was really an interaction-design failure:
the system's attention model did not match the social situation it was in.
Interfaces have the same problem in quieter forms — dashboards that privilege
the administrator's view over the operator's, notification systems that
interrupt the person who can least act on them.

## What the affinity wall actually said

When we synthesized the observations, the affinity diagram exposed a set of
interaction issues far broader than speech alone: feedback, motivation,
ethics, expectations, guidance, and how a system should acknowledge presence
in a group setting. The headline problem ("speech recognition is unreliable")
turned out to be the least interesting finding.

That is the part of the process I now defend hardest in product work:
synthesis time. The raw observations were entertaining anecdotes; the wall
turned them into a map of design obligations.

## What I keep from this

- Watch for workarounds, not just failures — they are the honest signal.
- Make the system's state legible enough that users' self-built mental
  models land close to reality.
- Design the attention model deliberately: who does the system look at,
  listen to, and interrupt?
- Budget real time for synthesis. The findings you can name in the room are
  rarely the ones that matter.
