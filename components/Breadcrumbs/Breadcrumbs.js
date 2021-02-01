import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const convertBreadcrumb = (string) => {
  return string
    .replace(/-/g, " ")
    .replace(/oe/g, "ö")
    .replace(/ae/g, "ä")
    .replace(/ue/g, "ü")
    .toUpperCase();
};

export const Breadcrumbs = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split("/");
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: "/" + linkPath.slice(0, i + 1).join("/"),
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <div className="flex flex-row text-align-center" aria-label="breadcrumbs">
      <div>
        <Link href="/">
          <a>HOME</a>
        </Link>
      </div>
      {breadcrumbs.map((breadcrumb, i) => {
        return (
          <div key={breadcrumb.href}>
            {breadcrumb.breadcrumb === "" ? (
              <>&nbsp;&nbsp;</>
            ) : (
              <>
                &nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                <Link href={breadcrumb.href}>
                  <a>{convertBreadcrumb(breadcrumb.breadcrumb)}</a>
                </Link>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};
