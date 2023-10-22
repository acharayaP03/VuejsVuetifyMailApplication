
import '@testing-library/jest-dom/extend-expect';
import { cleanup } from "@testing-library/vue";
import * as matchers from "@testing-library/jest-dom/matchers";
import { expect, afterEach } from "vitest";

expect.extend(matchers);

/**
 Clean up js-dom after each test
 */

afterEach(() => {
    cleanup();
})