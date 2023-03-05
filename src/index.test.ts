import { describe, expect, test } from "vitest"
import { getEcho } from "./lib"

describe("it works", () => {
    test("echo", () => {
        expect(getEcho()).toBe("sup")
    })
})
