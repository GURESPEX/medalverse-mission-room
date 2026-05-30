import MDV from "@/src/components/mdv";
import { LibraryBig } from "lucide-react";

const TEXT = "The quick brown fox jumps over the lazy dog";
const BUTTON_TEXT = "Button";

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col size-full">
        <div className="flex flex-col p-4">
          <MDV.Typography.Display size="large">{TEXT}</MDV.Typography.Display>
          <MDV.Typography.Display size="medium">{TEXT}</MDV.Typography.Display>
          <MDV.Typography.Heading size="heading-1">
            {TEXT}
          </MDV.Typography.Heading>
          <MDV.Typography.Heading size="heading-2">
            {TEXT}
          </MDV.Typography.Heading>
          <MDV.Typography.Heading size="heading-3">
            {TEXT}
          </MDV.Typography.Heading>
          <MDV.Typography.Heading size="heading-4">
            {TEXT}
          </MDV.Typography.Heading>

          <MDV.Typography.Body size="large" bold="bold">
            {TEXT}
          </MDV.Typography.Body>
          <MDV.Typography.Body size="medium" bold="bold">
            {TEXT}
          </MDV.Typography.Body>
          <MDV.Typography.Body size="small" bold="bold">
            {TEXT}
          </MDV.Typography.Body>
          <MDV.Typography.Body size="large" bold="semibold">
            {TEXT}
          </MDV.Typography.Body>
          <MDV.Typography.Body size="medium" bold="semibold">
            {TEXT}
          </MDV.Typography.Body>
          <MDV.Typography.Body size="small" bold="semibold">
            {TEXT}
          </MDV.Typography.Body>
          <MDV.Typography.Body size="large" bold="medium">
            {TEXT}
          </MDV.Typography.Body>
          <MDV.Typography.Body size="medium" bold="medium">
            {TEXT}
          </MDV.Typography.Body>
          <MDV.Typography.Body size="small" bold="medium">
            {TEXT}
          </MDV.Typography.Body>
          <MDV.Typography.Body size="large" bold="regular">
            {TEXT}
          </MDV.Typography.Body>
          <MDV.Typography.Body size="medium" bold="regular">
            {TEXT}
          </MDV.Typography.Body>
          <MDV.Typography.Body size="small" bold="regular">
            {TEXT}
          </MDV.Typography.Body>

          <MDV.Typography.Caption overline>{TEXT}</MDV.Typography.Caption>
          <MDV.Typography.Caption>{TEXT}</MDV.Typography.Caption>
        </div>

        <div className="flex">
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button size="large">{BUTTON_TEXT}</MDV.Button>
            <MDV.Button size="medium">{BUTTON_TEXT}</MDV.Button>
            <MDV.Button size="small">{BUTTON_TEXT}</MDV.Button>
            <MDV.Button size="large" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button size="medium" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button size="small" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button size="large" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button size="medium" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button size="small" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button size="large" disabled loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button size="medium" disabled loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button size="small" disabled loading>
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button iconStart={<LibraryBig />} size="large">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button iconStart={<LibraryBig />} size="medium">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button iconStart={<LibraryBig />} size="small">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button iconStart={<LibraryBig />} size="large" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button iconStart={<LibraryBig />} size="medium" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button iconStart={<LibraryBig />} size="small" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button iconStart={<LibraryBig />} size="large" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button iconStart={<LibraryBig />} size="medium" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button iconStart={<LibraryBig />} size="small" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              iconStart={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              iconStart={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              iconStart={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button iconEnd={<LibraryBig />} size="large">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button iconEnd={<LibraryBig />} size="medium">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button iconEnd={<LibraryBig />} size="small">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button iconEnd={<LibraryBig />} size="large" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button iconEnd={<LibraryBig />} size="medium" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button iconEnd={<LibraryBig />} size="small" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button iconEnd={<LibraryBig />} size="large" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button iconEnd={<LibraryBig />} size="medium" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button iconEnd={<LibraryBig />} size="small" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button iconEnd={<LibraryBig />} size="large" disabled loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button iconEnd={<LibraryBig />} size="medium" disabled loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button iconEnd={<LibraryBig />} size="small" disabled loading>
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button rounded iconStart={<LibraryBig />} size="large">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button rounded iconStart={<LibraryBig />} size="medium">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button rounded iconStart={<LibraryBig />} size="small">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              rounded
              iconStart={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              rounded
              iconStart={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button rounded iconStart={<LibraryBig />} size="large" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button rounded iconStart={<LibraryBig />} size="small" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              rounded
              iconStart={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              rounded
              iconStart={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button rounded iconEnd={<LibraryBig />} size="large">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button rounded iconEnd={<LibraryBig />} size="medium">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button rounded iconEnd={<LibraryBig />} size="small">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button rounded iconEnd={<LibraryBig />} size="large" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button rounded iconEnd={<LibraryBig />} size="medium" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button rounded iconEnd={<LibraryBig />} size="small" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button rounded iconEnd={<LibraryBig />} size="large" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button rounded iconEnd={<LibraryBig />} size="medium" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button rounded iconEnd={<LibraryBig />} size="small" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              rounded
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              rounded
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button color="dark" size="large">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="dark" size="medium">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="dark" size="small">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="dark" size="large" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="dark" size="medium" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="dark" size="small" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="dark" size="large" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="dark" size="medium" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="dark" size="small" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="dark" size="large" disabled loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="dark" size="medium" disabled loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="dark" size="small" disabled loading>
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button color="dark" iconStart={<LibraryBig />} size="large">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="dark" iconStart={<LibraryBig />} size="medium">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="dark" iconStart={<LibraryBig />} size="small">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              iconStart={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              iconStart={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              iconStart={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              iconStart={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              iconStart={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              iconStart={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              iconStart={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              iconStart={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              iconStart={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button color="dark" iconEnd={<LibraryBig />} size="large">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="dark" iconEnd={<LibraryBig />} size="medium">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="dark" iconEnd={<LibraryBig />} size="small">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button color="secondary" size="large">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="secondary" size="medium">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="secondary" size="small">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="secondary" size="large" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="secondary" size="medium" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="secondary" size="small" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="secondary" size="large" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="secondary" size="medium" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="secondary" size="small" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="secondary" size="large" disabled loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="secondary" size="medium" disabled loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="secondary" size="small" disabled loading>
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              color="secondary"
              iconStart={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              iconStart={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              iconStart={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              iconStart={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              iconStart={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              iconStart={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              iconStart={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              iconStart={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              iconStart={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              iconStart={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              iconStart={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              iconStart={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button color="secondary" iconEnd={<LibraryBig />} size="large">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="secondary" iconEnd={<LibraryBig />} size="small">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button color="danger" size="large">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="danger" size="medium">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="danger" size="small">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="danger" size="large" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="danger" size="medium" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="danger" size="small" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="danger" size="large" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="danger" size="medium" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="danger" size="small" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="danger" size="large" disabled loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="danger" size="medium" disabled loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="danger" size="small" disabled loading>
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button color="danger" iconStart={<LibraryBig />} size="large">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="danger" iconStart={<LibraryBig />} size="medium">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="danger" iconStart={<LibraryBig />} size="small">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              iconStart={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              iconStart={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              iconStart={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              iconStart={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              iconStart={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              iconStart={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              iconStart={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              iconStart={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              iconStart={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button color="danger" iconEnd={<LibraryBig />} size="large">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="danger" iconEnd={<LibraryBig />} size="medium">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button color="danger" iconEnd={<LibraryBig />} size="small">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button variant="outline" size="large">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="outline" size="medium">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="outline" size="small">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="outline" size="large" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="outline" size="medium" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="outline" size="small" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="outline" size="large" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="outline" size="medium" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="outline" size="small" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="outline" size="large" disabled loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="outline" size="medium" disabled loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="outline" size="small" disabled loading>
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="outline"
              iconStart={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              iconStart={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              iconStart={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              iconStart={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              iconStart={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              iconStart={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              iconStart={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              iconStart={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              iconStart={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              iconStart={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              iconStart={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              iconStart={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button variant="outline" iconEnd={<LibraryBig />} size="large">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="outline" iconEnd={<LibraryBig />} size="small">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="outline"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="outline"
              rounded
              iconStart={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              rounded
              iconStart={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              rounded
              iconStart={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              rounded
              iconStart={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              rounded
              iconStart={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              rounded
              iconStart={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              rounded
              iconStart={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              rounded
              iconStart={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="outline"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="outline"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button variant="outline" color="dark" size="large">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="outline" color="dark" size="medium">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="outline" color="dark" size="small">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="outline" color="dark" size="large" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="outline" color="dark" size="medium" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="outline" color="dark" size="small" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="outline" color="dark" size="large" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="outline" color="dark" size="medium" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="outline" color="dark" size="small" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="outline"
              color="dark"
              iconStart={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              iconStart={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              iconStart={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              iconStart={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              iconStart={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              iconStart={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              iconStart={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              iconStart={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              iconStart={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              iconStart={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              iconStart={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              iconStart={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="outline"
              color="dark"
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="outline"
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button variant="outline" color="secondary" size="large">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="outline" color="secondary" size="medium">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="outline" color="secondary" size="small">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="outline"
              color="secondary"
              iconStart={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              iconStart={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              iconStart={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              iconStart={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              iconStart={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              iconStart={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              iconStart={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              iconStart={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              iconStart={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              iconStart={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              iconStart={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              iconStart={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="outline"
              color="secondary"
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="outline"
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button variant="outline" color="danger" size="large">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="outline" color="danger" size="medium">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="outline" color="danger" size="small">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="outline" color="danger" size="large" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="outline" color="danger" size="medium" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="outline" color="danger" size="small" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="outline" color="danger" size="large" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="outline" color="danger" size="medium" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="outline" color="danger" size="small" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="outline"
              color="danger"
              iconStart={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              iconStart={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              iconStart={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              iconStart={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              iconStart={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              iconStart={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              iconStart={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              iconStart={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              iconStart={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              iconStart={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              iconStart={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              iconStart={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="outline"
              color="danger"
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="outline"
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="outline"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button variant="ghost" size="large">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" size="medium">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" size="small">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" size="large" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" size="medium" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" size="small" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" size="large" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" size="medium" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" size="small" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" size="large" disabled loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" size="medium" disabled loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" size="small" disabled loading>
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button variant="ghost" iconStart={<LibraryBig />} size="large">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              iconStart={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" iconStart={<LibraryBig />} size="small">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              iconStart={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              iconStart={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              iconStart={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              iconStart={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              iconStart={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              iconStart={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              iconStart={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              iconStart={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              iconStart={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button variant="ghost" iconEnd={<LibraryBig />} size="large">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" iconEnd={<LibraryBig />} size="medium">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" iconEnd={<LibraryBig />} size="small">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="ghost"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="ghost"
              rounded
              iconStart={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              rounded
              iconStart={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              rounded
              iconStart={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              rounded
              iconStart={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              rounded
              iconStart={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              rounded
              iconStart={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              rounded
              iconStart={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              rounded
              iconStart={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="ghost"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="ghost"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button variant="ghost" color="dark" size="large">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" color="dark" size="medium">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" color="dark" size="small">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" color="dark" size="large" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" color="dark" size="medium" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" color="dark" size="small" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" color="dark" size="large" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" color="dark" size="medium" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" color="dark" size="small" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="ghost"
              color="dark"
              iconStart={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              iconStart={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              iconStart={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              iconStart={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              iconStart={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              iconStart={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              iconStart={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              iconStart={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              iconStart={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              iconStart={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              iconStart={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              iconStart={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="ghost"
              color="dark"
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="ghost"
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="dark"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button variant="ghost" color="secondary" size="large">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" color="secondary" size="medium">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" color="secondary" size="small">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" color="secondary" size="large" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" color="secondary" size="small" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" color="secondary" size="large" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" color="secondary" size="medium" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" color="secondary" size="small" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconStart={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconStart={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconStart={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconStart={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconStart={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconStart={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconStart={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconStart={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconStart={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconStart={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconStart={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconStart={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="secondary"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button variant="ghost" color="danger" size="large">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" color="danger" size="medium">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" color="danger" size="small">
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" color="danger" size="large" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" color="danger" size="medium" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" color="danger" size="small" disabled>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" color="danger" size="large" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" color="danger" size="medium" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button variant="ghost" color="danger" size="small" loading>
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="ghost"
              color="danger"
              iconStart={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              iconStart={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              iconStart={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              iconStart={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              iconStart={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              iconStart={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              iconStart={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              iconStart={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              iconStart={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              iconStart={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              iconStart={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              iconStart={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="ghost"
              color="danger"
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="ghost"
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="large"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="medium"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
            <MDV.Button
              variant="ghost"
              color="danger"
              rounded
              iconStart={<LibraryBig />}
              iconEnd={<LibraryBig />}
              size="small"
              disabled
              loading
            >
              {BUTTON_TEXT}
            </MDV.Button>
          </div>
        </div>
      </div>
      <div className="flex p-4">
        <MDV.Typography.Body size="small" className="text-mdv-neutral-400">
          I have done only Typography components (Display, Heading, Body and
          Caption) and Button components next. I must do the Sidebar components
          next.
        </MDV.Typography.Body>
      </div>
    </div>
  );
}
