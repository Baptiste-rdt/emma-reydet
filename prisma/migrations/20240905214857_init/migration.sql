-- CreateTable
CREATE TABLE "creations" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "creations_pkey" PRIMARY KEY ("id")
);
