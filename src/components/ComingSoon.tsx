import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
  Chip,
  LinearProgress,
} from "@mui/material";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import GithubIcon from "@mui/icons-material/GitHub";

const MYNAME = "Tom Quez";
const TAGLINE =
  "Building the future, one line of code at a time. Personal Web Page coming soon!";
const GITHUBPROFILE = "https://github.com/TomQuez";

export default function ComingSoon() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        p: "3",
        background:
          "linear-gradient(120deg, #0ea5e9, #6366f1, #22c55e, #0ea5e9)",
        backgroundSize: "200% 200%",
        animation: "gradientShift 15s ease infinite",
        "@keyframes gradientShift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      }}
    >
      <Card
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 820,
          borderRadius: 4,
          p: { xs: 2, sm: 3 },
          bgcolor: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.25)",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.15),inset 0 1px 0 rgba(255,255,255,0.2)",
          backdropFilter: "blur(12px)",
        }}
      >
        <CardContent>
          <Stack spacing={3} alignItems="center" textAlign="center">
            <Chip
              icon={<ConstructionRoundedIcon />}
              label="Construction in progress..."
              variant="outlined"
              sx={{
                color: "common.white",
                borderColor: "rgba(255,255,255,0.6)",
                bgcolor: "rgba(255,255,255,0.06)",
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                fontSize: { xs: 34, sm: 44, md: 54 },
                background:
                  "linear-gradient(90deg, #fff, rgba(255,255,255,0.85))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              "Web Page Under Construction"
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(255,255,255,0.9)",
                fontWeight: 500,
                maxWidth: "65ch",
              }}
            >
              {TAGLINE}
            </Typography>
            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={2}
              sx={{
                mt: 1,
              }}
            >
              <Button
                size="large"
                variant="contained"
                startIcon={<GithubIcon />}
                href={GITHUBPROFILE}
                target="_blank"
                rel="noopener noreferrer"
              >
                Reach me on Github
              </Button>
            </Stack>
            <Box sx={{ width: "100%", mt: 2 }}>
              <LinearProgress
                sx={{
                  height: 8,
                  borderRadius: 999,
                  bgcolor: "rgba(255,255,255,0.15)",
                  "& .MuiLinearProgress-bar": {
                    borderRadius: 999,
                  },
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  color: "rgba(255,255,255,0.8)",
                  mt: 2,
                }}
              >
                This page is under construction. Please check back later for
                updates. Thank you for your patience!
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255,255,255,0.8)",
                mt: 2,
              }}
            >
              © {new Date().getFullYear()} {MYNAME}. All rights reserved.
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
